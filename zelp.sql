-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 25 juil. 2023 à 10:44
-- Version du serveur : 8.0.30
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `zelp`
--

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

CREATE TABLE `avis` (
  `id` int NOT NULL,
  `rating` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `restaurantId` int DEFAULT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `avis_reponse_avis`
--

CREATE TABLE `avis_reponse_avis` (
  `avisId_1` int NOT NULL,
  `avisId_2` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

CREATE TABLE `restaurant` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `villeId` int DEFAULT NULL,
  `userId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `restaurant`
--

INSERT INTO `restaurant` (`id`, `name`, `description`, `villeId`, `userId`) VALUES
(8, 'Odyssé', 'Super bon ! ', 1, 3),
(9, 'Case à Pizza', 'Super bon pour pas cher !', 2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `villeId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`, `firstname`, `lastname`, `villeId`) VALUES
(1, 'testa@gmail.com', 'test', 'client', 'test', 'test', NULL),
(2, 'testz@gmail.com', 'test', 'client', 'test', 'test', NULL),
(3, 'testb@gmail.com', 'test', 'restaurateur', 'test', 'test', NULL),
(4, 'testc@gmail.com', 'test', 'restaurateur', 'test', 'test', NULL),
(7, 'jd9743101@gmail.com', '$2b$10$cG2lkawPa6E4nU6B1f7MEOvGLr5/rUXjF/S1bl4vKSzXtCeKvNmbe', 'admin', 'Jean Davidson', 'SAUTRON', NULL),
(10, 'jeandavidson.sautron@nautilus.fr', 'aa', 'client', 'jean davidson', 'SAUTRON', 2),
(21, 'jeandavidson.sautron@nautilus.frff', '$2b$10$tboLQpBoUvHbTq5wsp1wWurNo64jLeSXPnfrohQImP3ilDtNl1ora', 'restaurateur', 'jean davidson', 'SAUTRON', 1),
(22, 'a', '$2b$10$9Juzo8u8pt3mLUyhIKB2TO.Q5/A0ozXLB1Lk2.tIZp7ZLoK7NPVRy', 'restaurateur', 'jean davidson', 'SAUTRON', 4),
(30, 'jeandavidson.sautron@nautilus.frA', '$2b$10$8svuByRERcCHDDyhT.PzX.wuXtA85uTb35qj22jrLwjTrm1g4GZsq', 'client', 'jean davidson', 'SAUTRON', 4),
(31, 'jeandavidson.sautron@nautilus.frAF', '$2b$10$Ujqfo/n2Ipw532/AUzwhmujQh/EaYyxzOHQrqsHvDTJCkN11wDIiK', 'client', 'jean davidson', 'SAUTRON', 4);

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

CREATE TABLE `ville` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `cp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`id`, `name`, `cp`) VALUES
(1, 'Sainte Suzanne', '97441'),
(2, 'Saint Denis', '97400'),
(3, 'Saint Denis', '97400'),
(4, 'Bras Panon', '97412'),
(5, 'Saint Pierre', '97410'),
(6, 'Sainte-Marie', '97438');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_e0eb07bd223c47b40f1199852e6` (`userId`),
  ADD KEY `FK_37dc47770393cd630d40e0cfe1a` (`restaurantId`);

--
-- Index pour la table `avis_reponse_avis`
--
ALTER TABLE `avis_reponse_avis`
  ADD PRIMARY KEY (`avisId_1`,`avisId_2`),
  ADD KEY `IDX_698b42cf0ec29725c2ef3293fd` (`avisId_1`),
  ADD KEY `IDX_c5bf7120a4b2f48c0ab1762acb` (`avisId_2`);

--
-- Index pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_aca5ff5774d7a786fbd2ad0f9c3` (`villeId`),
  ADD KEY `FK_43ebcd49fca84c2fda8c077ac68` (`userId`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`),
  ADD KEY `FK_ff7032b97f70f3b79cb04682c48` (`villeId`);

--
-- Index pour la table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `avis`
--
ALTER TABLE `avis`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `ville`
--
ALTER TABLE `ville`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `FK_37dc47770393cd630d40e0cfe1a` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant` (`id`),
  ADD CONSTRAINT `FK_e0eb07bd223c47b40f1199852e6` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `avis_reponse_avis`
--
ALTER TABLE `avis_reponse_avis`
  ADD CONSTRAINT `FK_698b42cf0ec29725c2ef3293fdf` FOREIGN KEY (`avisId_1`) REFERENCES `avis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_c5bf7120a4b2f48c0ab1762acb1` FOREIGN KEY (`avisId_2`) REFERENCES `avis` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD CONSTRAINT `FK_43ebcd49fca84c2fda8c077ac68` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_aca5ff5774d7a786fbd2ad0f9c3` FOREIGN KEY (`villeId`) REFERENCES `ville` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_ff7032b97f70f3b79cb04682c48` FOREIGN KEY (`villeId`) REFERENCES `ville` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
