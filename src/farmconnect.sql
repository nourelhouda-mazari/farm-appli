CREATE TABLE Users (
  idUser VARCHAR(20) PRIMARY KEY,
  age INTEGER,
  ville VARCHAR(30),
  justificatif BLOB,
  email VARCHAR(30) UNIQUE, -- Enforce unique emails
  motDePasseHash VARCHAR(255) NOT NULL,
  profession VARCHAR(30) CHECK (profession IN ('consommateur', 'ingénieur', 'agriculteur', 'commerçant'))
);

CREATE TABLE Agriculteur (
  idUser VARCHAR(20) PRIMARY KEY REFERENCES Users(idUser) ON DELETE CASCADE
);

CREATE TABLE Ingenieur (
  idUser VARCHAR(20) PRIMARY KEY REFERENCES Users(idUser) ON DELETE CASCADE,
  specialite VARCHAR(50)
);

CREATE TABLE Commercant (
  idUser VARCHAR(20) PRIMARY KEY REFERENCES Users(idUser) ON DELETE CASCADE
);

CREATE TABLE Consommateur (
  idUser VARCHAR(20) PRIMARY KEY REFERENCES Users(idUser) ON DELETE CASCADE,
  justificatif VARCHAR(30) DEFAULT 'none'
);


CREATE TABLE DemandeLocation (
  codeD VARCHAR(20) PRIMARY KEY,
  duree VARCHAR(20) NOT NULL,
  equipement VARCHAR(20),
  idLoc VARCHAR(20),
  FOREIGN KEY (equipement) REFERENCES Equipement(codeE),
  FOREIGN KEY (idLoc) REFERENCES Users(idUser)
);

ALTER TABLE DemandeLocation
  ADD CONSTRAINT fk_profession_demandelocation CHECK (profession IN ('agriculteur', 'ingénieur'));


CREATE TABLE Equipement (
  codeE VARCHAR(20) PRIMARY KEY,
  prix INTEGER,
  description VARCHAR(255),
  idOwner VARCHAR(20),
  FOREIGN KEY (idOwner) REFERENCES Users(idUser) ON DELETE CASCADE,
  CHECK (profession IN ('agriculteur', 'ingénieur'))  -- Combined profession check
);

CREATE TABLE Tuto (
  codeT VARCHAR(20) PRIMARY KEY,
  vd_img BLOB,
  url VARCHAR(255),
  description VARCHAR(255),
  idP VARCHAR(20),
  date_p DATE,
  heure TIME,
  FOREIGN KEY (idP) REFERENCES Ingenieur(idUser) ON DELETE CASCADE
);

ALTER TABLE Tuto
  ADD CONSTRAINT fk_profession_ingenieur CHECK (profession = 'ingénieur');  -- Added separate ALTER TABLE statement


CREATE TABLE Consulter (
  codeC VARCHAR(20) PRIMARY KEY,
  idUser VARCHAR(20),
  codeT VARCHAR(20),
  likes INTEGER DEFAULT 0,
  FOREIGN KEY (idUser) REFERENCES Users(idUser) ON DELETE CASCADE,
  FOREIGN KEY (codeT) REFERENCES Tuto(codeT) ON DELETE CASCADE
);

CREATE TABLE Produit (
  codeP VARCHAR(10) PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  prix INTEGER,
  quantite INTEGER,
  idVendeur VARCHAR(20),
  CHECK (profession IN ('commerçant', 'agriculteur')),
  FOREIGN KEY (idVendeur) REFERENCES Users(idUser) ON DELETE CASCADE
);

CREATE TABLE Commander (
  codeC VARCHAR(10) PRIMARY KEY,
  qte INTEGER,  -- Use lowercase 'qte' for consistency
  date_C DATE,
  heure TIME,
  valider INTEGER, -- Use a more descriptive name (e.g., is_validated)
  message VARCHAR(255),
  idCons VARCHAR(20), -- Use 'idCons' for clarity
  codeP VARCHAR(10),
  FOREIGN KEY (idCons) REFERENCES Consommateur(idUser) ON DELETE CASCADE,
  FOREIGN KEY (codeP) REFERENCES Produit(codeP)  -- Assuming a separate Produit table
);

