# Madhulen-01
This is a public version of madhulen hosted on Github Pages

## To-do liste

- Tilføj Github Action som automatisk deployer til gh-branch når main bliver opdateret.

# MKDocs guides
## Guide for image manipulation 
https://squidfunk.github.io/mkdocs-material/reference/images/#image-alignment-left

## MkDocs deploy to Github pages

```
mkdocs gh-deploy
```

     python --version
     ```
   - Hvis du får en fejl, skal du installere Python fra [python.org](https://www.python.org/downloads/).

2. **Installer Python med `pip` inkluderet**:
   - Under installationen skal du sikre dig, at du markerer feltet **"Add Python to PATH"**.

3. **Kontroller, om `pip` er installeret**:
   - Skriv følgende i kommandoprompten:
     
```cmd
     python -m ensurepip --upgrade
     ```
4. **Opdater `pip`**:
   - Kør følgende kommando for at opdatere `pip`:
     
```cmd
     python -m pip install --upgrade pip
     ```
5. **Installer `mkdocs`**:
   - Når `pip` fungerer, kan du installere `mkdocs` med:
     
```cmd
     python -m pip install mkdocs
     ```
6. **Genstart kommandoprompten**:
   - Hvis du stadig får fejlen, skal du genstarte kommandoprompten for at sikre, at ændringerne i PATH er anvendt.

Hvis problemet fortsætter, kan du kontrollere, om Python og `pip` er korrekt tilføjet til PATH ved at følge denne guide: [Using Python on Windows](https://docs.python.org/3/using/windows.html).