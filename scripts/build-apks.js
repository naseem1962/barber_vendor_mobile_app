#!/usr/bin/env node
/**
 * Build APKs for User and Vendor apps and copy to mobile_apk/
 * Requires: Node.js, Java JDK 17+, Android SDK (ANDROID_HOME)
 * Run from barber_app root: node scripts/build-apks.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, '..');
const mobileApkDir = path.join(root, 'mobile_apk');
const isWin = process.platform === 'win32';
const gradlew = isWin ? 'gradlew.bat' : './gradlew';

const apps = [
  { dir: 'user-mobile', apkName: 'user-app.apk' },
  { dir: 'barber-mobile', apkName: 'vendor-app.apk' },
];

function run(cmd, cwd = root, env = process.env) {
  console.log(`\n> ${cmd}`);
  try {
    execSync(cmd, { cwd, stdio: 'inherit', env: { ...env, FORCE_COLOR: '1' } });
  } catch (e) {
    console.error(`Command failed: ${cmd}`);
    process.exit(1);
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(mobileApkDir);

for (const { dir, apkName } of apps) {
  const appPath = path.join(root, dir);
  const androidPath = path.join(appPath, 'android');

  console.log(`\n========== Building ${dir} ==========`);

  if (!fs.existsSync(path.join(appPath, 'package.json'))) {
    console.error(`Missing ${dir}/package.json. Run npm install in ${dir} first.`);
    process.exit(1);
  }

  // Prebuild Android (generates android/ if missing)
  run(`npx expo prebuild --platform android --clean`, appPath);

  if (!fs.existsSync(androidPath)) {
    console.error(`Prebuild did not create ${dir}/android`);
    process.exit(1);
  }

  // Build debug APK (no signing required). Use assembleRelease if you have signing configured.
  const apkOutput = path.join(
    androidPath,
    'app',
    'build',
    'outputs',
    'apk',
    'debug',
    'app-debug.apk'
  );
  const releaseOutput = path.join(
    androidPath,
    'app',
    'build',
    'outputs',
    'apk',
    'release',
    'app-release.apk'
  );

  run(`${gradlew} assembleDebug`, androidPath);

  const srcApk = fs.existsSync(apkOutput) ? apkOutput : releaseOutput;
  if (!fs.existsSync(srcApk)) {
    console.error(`APK not found at ${srcApk}`);
    process.exit(1);
  }

  const destApk = path.join(mobileApkDir, apkName);
  fs.copyFileSync(srcApk, destApk);
  console.log(`\n✓ Copied to ${destApk}`);
}

console.log('\n========== Done ==========');
console.log(`APKs are in: ${mobileApkDir}`);
console.log('  - user-app.apk (User app)');
console.log('  - vendor-app.apk (Vendor app)');
