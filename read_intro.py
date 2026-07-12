import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'(<!-- Introduction & About -->.*?</section>)', content, re.DOTALL)
if match:
    print(match.group(1)[:1500])
