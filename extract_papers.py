import fitz, os, glob

papers_dir = 'E:/408/408-exam-papers/papers-rebuild'
out_dir = 'E:/408/data/exam-questions'
os.makedirs(out_dir, exist_ok=True)

for pdf_file in sorted(glob.glob(f'{papers_dir}/*.pdf')):
    year = os.path.basename(pdf_file).replace('.pdf', '')
    doc = fitz.open(pdf_file)
    full_text = ''
    for page in doc:
        full_text += page.get_text() + '\n---PAGE---\n'

    out_path = f'{out_dir}/{year}.txt'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(full_text)

    print(f'{year}: {doc.page_count} pages, {len(full_text)} chars')
    doc.close()

txt_count = len(glob.glob(out_dir + '/*.txt'))
print(f'Extracted {txt_count} papers to {out_dir}')
