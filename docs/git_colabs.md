# 1. Pastikan di main branch & update
git checkout main
git pull origin main

# 2. Buat branch baru untuk fitur
git checkout -b feature/auth-login

# 3. Coding... lalu commit
git add .
git commit -m "feat: add login authentication"

# 4. Push ke GitHub
git push origin feature/auth-login

# 5. Buat Pull Request di GitHub
# Tunggu review dari teman
Teman bikin fitur berbeda:
bash# 1. Update dari main
git checkout main
git pull origin main

# 2. Buat branch sendiri
git checkout -b feature/event-list

# 3. Coding... lalu commit
git add .
git commit -m "feat: add event listing page"

# 4. Push
git push origin feature/event-list

# 5. Buat Pull Request
    -Merge Pull Request:
    -Review code teman di GitHub
    -Diskusi kalau ada yang perlu diperbaiki
    -Kalau oke, klik Merge Pull Request
    -Delete branch setelah merge