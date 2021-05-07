# bluePrintScaffold
Info Website for Blueprint Scaffolds

# Dev Install

- Node
to use scss
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# Open New Terminal, Check nvm installed
nvm

# Install Node
nvm install node

# Install Sass
npm install -g sass
```

- Python
```bash
# Create env !! First Time Only !!
python3 -m venv env

# Activate env
source env/bin/activate

# Install requirements
pip install -r requirements.txt
```

- Compile scss to css
```bash
sass source/css/styles.scss public/css/styles.css
```

- Generate New Requirements (python)
```bash
# Make sure you have activated .env (above)
pip freeze > requirements.txt
```