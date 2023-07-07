Feature: Testing in category page

    Background:
        Given The user successful to login using email "<email>" and password "<password>"

    Scenario : The user wants to add new category
        When The user clicks on kategori button
        When The user clicks on tambah button 
        When The user inputs nama kategori "<namaKategori>" and deskripsi "<deskripsi>"
        When The user clicks on button simpan
        Then The user should see a successful message "<sukses>" "<ditambahkan>"

        Examples:
            | email           | password  | namaKategori | deskripsi | sukses  | ditambahkan      |
            | jaya45@mail.com | 12345     | PC Gaming    | PC Gaming | success | item ditambahkan |