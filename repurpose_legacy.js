const fs = require('fs');

const migrationContent = `
<section class="py-20 md:py-32 bg-surface text-center px-margin-mobile md:px-margin-desktop">
    <div class="max-w-3xl mx-auto space-y-8">
        <span class="bg-primary-container/10 text-primary-container px-4 py-1.5 rounded-full w-fit font-label-lg text-label-lg inline-block">
            IMPORTANT UPDATE
        </span>
        <h1 class="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface leading-tight">
            We have merged with <span class="text-primary">WritersHub Plus</span>
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
            To provide you with an even better, faster, and more comprehensive experience, our independent services have officially joined forces with WritersHub Plus. You can still expect the exact same high-quality academic and career services you know and love, now backed by a larger team of experts.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pt-6">
            <a href="/writing-services/index.html" class="bg-primary text-on-primary font-button px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                Explore Academic Services
            </a>
            <a href="/job-hunting-services/index.html" class="bg-surface text-primary border border-primary font-button px-8 py-4 rounded-lg shadow-sm hover:bg-primary/5 transition-all active:scale-95">
                Explore Career Services
            </a>
        </div>
    </div>
</section>
`;

['emailmeessay.html', 'essay-cave.html'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace everything between <main> and <footer>
        content = content.replace(/<main>[\s\S]*?(?=<!-- Footer -->|<footer)/i, '<main>\n' + migrationContent + '\n</main>\n');
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
    }
});
