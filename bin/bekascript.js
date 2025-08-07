#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const BekaScriptInterpreter = require('../src/interpreter');

const program = new Command();
const packageJson = require('../package.json');

program
  .name('bekascript')
  .description('BekaScript - Bahasa pemrograman dengan flavor Betawi-Bekasi')
  .version(packageJson.version);

// Command untuk menjalankan file .bks
program
  .command('run <file>')
  .alias('r')
  .description('Jalankan file BekaScript (.bks)')
  .option('-v, --verbose', 'tampilkan informasi verbose')
  .action((file, options) => {
    const filePath = path.resolve(file);

    if (!fs.existsSync(filePath)) {
      console.error(chalk.red(`❌ File tidak ditemukan: ${filePath}`));
      process.exit(1);
    }

    if (!filePath.endsWith('.bks')) {
      console.error(chalk.red('❌ File harus berekstensi .bks'));
      process.exit(1);
    }

    try {
      const code = fs.readFileSync(filePath, 'utf8');

      if (options.verbose) {
        console.log(chalk.blue(`🚀 Menjalankan: ${filePath}`));
        console.log(chalk.gray('─'.repeat(50)));
      }

      const interpreter = new BekaScriptInterpreter();
      interpreter.run(code);

      if (options.verbose) {
        console.log(chalk.gray('─'.repeat(50)));
        console.log(chalk.green('✅ Program selesai dijalankan'));
      }

    } catch (error) {
      console.error(chalk.red('❌ Error:'), error.message);
      process.exit(1);
    }
  });

// Command untuk membuat project baru
program
  .command('init [name]')
  .description('Buat project BekaScript baru')
  .option('-t, --template <type>', 'template project (basic, advanced)', 'basic')
  .action((name, options) => {
    const projectName = name || 'bekascript-project';
    const projectPath = path.resolve(projectName);

    if (fs.existsSync(projectPath)) {
      console.error(chalk.red(`❌ Folder ${projectName} sudah ada`));
      process.exit(1);
    }

    console.log(chalk.blue(`🏗️  Membuat project: ${projectName}`));

    // Buat struktur folder
    fs.mkdirSync(projectPath);
    fs.mkdirSync(path.join(projectPath, 'src'));
    fs.mkdirSync(path.join(projectPath, 'examples'));

    // Buat file main.bks
    const mainContent = getTemplateContent(options.template);
    fs.writeFileSync(path.join(projectPath, 'src', 'main.bks'), mainContent);

    // Buat package.json untuk project
    const projectPackageJson = {
      name: projectName,
      version: "1.0.0",
      description: "BekaScript project",
      main: "src/main.bks",
      scripts: {
        start: "bekascript run src/main.bks",
        dev: "bekascript run src/main.bks --verbose"
      },
      keywords: ["bekascript"],
      license: "MIT"
    };

    fs.writeFileSync(
      path.join(projectPath, 'package.json'),
      JSON.stringify(projectPackageJson, null, 2)
    );

    // Buat README.md
    const readmeContent = `# ${projectName}

Project BekaScript yang dibuat dengan \`bekascript init\`.

## Cara Menjalankan

\`\`\`bash
npm start
# atau
bekascript run src/main.bks
\`\`\`

## Struktur Project

- \`src/main.bks\` - File utama program
- \`examples/\` - Contoh-contoh program
- \`package.json\` - Konfigurasi project

Selamat coding dengan BekaScript! 🚀
`;

    fs.writeFileSync(path.join(projectPath, 'README.md'), readmeContent);

    console.log(chalk.green('✅ Project berhasil dibuat!'));
    console.log('');
    console.log(chalk.yellow('Langkah selanjutnya:'));
    console.log(`  cd ${projectName}`);
    console.log('  npm start');
  });

// Command untuk menampilkan contoh syntax
program
  .command('syntax')
  .alias('s')
  .description('Tampilkan contoh syntax BekaScript')
  .action(() => {
    console.log(chalk.blue.bold('📖 BekaScript Syntax Guide\n'));

    const examples = [
      {
        title: '📦 Variabel & Konstanta',
        code: `punya nama = "BekaScript";
anu umur = 1;`
      },
      {
        title: '📢 Output',
        code: `nongol "Halo dunia!";
nongol "Nama: " + nama;`
      },
      {
        title: '🔀 Kondisi',
        code: `kalo (umur > 18) {
    nongol "Dewasa";
} yakali (umur > 12) {
    nongol "Remaja";
} kalo_kaga {
    nongol "Anak-anak";
}`
      },
      {
        title: '🔄 Perulangan',
        code: `ulangin i dari 0 ampe 5 {
    nongol "Iterasi: " + i;
}

anu x = 0;
pokonya (x < 3) {
    nongol x;
    x++;
}`
      },
      {
        title: '⚙️ Fungsi',
        code: `guna sapa(nama) {
    nongol "Halo, " + nama + "!";
}

guna tambah(a, b) {
    balik a + b;
}

sapa("Budi");
anu hasil = tambah(5, 3);`
      }
    ];

    examples.forEach(example => {
      console.log(chalk.cyan.bold(example.title));
      console.log(chalk.gray(example.code));
      console.log('');
    });
  });

// Command untuk menampilkan informasi
program
  .command('info')
  .description('Tampilkan informasi BekaScript')
  .action(() => {
    console.log(chalk.blue.bold('ℹ️  BekaScript Information\n'));
    console.log(`${chalk.yellow('Version:')} ${packageJson.version}`);
    console.log(`${chalk.yellow('Description:')} ${packageJson.description}`);
    console.log(`${chalk.yellow('Author:')} ${packageJson.author.name}`);
    console.log(`${chalk.yellow('License:')} ${packageJson.license}`);
    console.log(`${chalk.yellow('Homepage:')} ${packageJson.homepage}`);
    console.log('');
    console.log(chalk.green('🚀 Selamat datang di BekaScript!'));
    console.log(chalk.gray('Bahasa pemrograman dengan flavor Betawi-Bekasi'));
  });

// Default action - jika hanya file yang diberikan
program
  .argument('[file]', 'file BekaScript untuk dijalankan')
  .action((file) => {
    if (file) {
      // Jalankan file langsung
      program.parse(['node', 'bekascript', 'run', file]);
    } else {
      // Tampilkan help
      program.help();
    }
  });

// Template content untuk project baru
function getTemplateContent(template) {
  const basicTemplate = `// Program BekaScript Dasar
// Dibuat dengan bekascript init

nongol "=== Selamat Datang di BekaScript! ===";

punya nama = "BekaScript Developer";
anu score = 0;

nongol "Halo, " + nama + "!";
nongol "Score awal: " + score;

// Fungsi sederhana
guna tambahScore(point) {
    score = score + point;
    nongol "Score bertambah " + point + ", total: " + score;
}

// Test fungsi
tambahScore(10);
tambahScore(5);

// Kondisi
kalo (score >= 15) {
    nongol "Excellent! Score kamu tinggi!";
} kalo_kaga {
    nongol "Keep going, kamu pasti bisa!";
}

nongol "=== Program Selesai ===";
`;

  const advancedTemplate = `// Program BekaScript Advanced
// Dibuat dengan bekascript init --template advanced

nongol "=== BekaScript Advanced Template ===";

// Konfigurasi game sederhana
punya MAKS_NYAWA = 3;
punya MAKS_LEVEL = 5;

anu nyawa = MAKS_NYAWA;
anu level = 1;
anu score = 0;

// Fungsi utility
guna tampilkanStatus() {
    nongol "Level: " + level + " | Nyawa: " + nyawa + " | Score: " + score;
}

guna levelUp() {
    level++;
    score = score + (level * 100);
    nongol "🎉 Level Up! Sekarang level " + level;
}

guna kurangiNyawa() {
    nyawa--;
    nongol "💔 Nyawa berkurang! Sisa: " + nyawa;
}

guna resetGame() {
    nyawa = MAKS_NYAWA;
    level = 1;
    score = 0;
    nongol "🔄 Game di-reset!");
}

// Main game loop
nongol "🎮 Memulai game...";
tampilkanStatus();

ulangin i dari 1 ampe MAKS_LEVEL {
    nongol "\\n--- Round " + i + " ---";

    // Simulasi gameplay
    anu berhasil = (i % 2 == 1); // Simple pattern

    kalo (berhasil) {
        nongol "✅ Berhasil melewati tantangan!";
        levelUp();
    } kalo_kaga {
        nongol "❌ Gagal! Coba lagi!";
        kurangiNyawa();

        kalo (nyawa <= 0) {
            nongol "💀 Game Over!");
            resetGame();
        }
    }

    tampilkanStatus();
}

nongol "\\n🏆 Selamat! Kamu menyelesaikan semua level!";
nongol "Final Score: " + score;
`;

  return template === 'advanced' ? advancedTemplate : basicTemplate;
}

// Handle errors
process.on('uncaughtException', (error) => {
  console.error(chalk.red('❌ Unexpected error:'), error.message);
  process.exit(1);
});

// Parse arguments
program.parse();
