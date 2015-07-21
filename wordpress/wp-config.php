<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clefs secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur 
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C'est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d'installation. Vous n'avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wordpress');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l'hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données. 
  * N'y touchez que si vous savez ce que vous faites. 
  */
define('DB_COLLATE', '');

/**#@+
 * Clefs uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant 
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n'importe quel moment, afin d'invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'bt?*;Oj_T@h&_3ODWss$4Htves{#Uo$G]_GEot|g{mN#FYa2+V>~+&Qan%jX}#Tq');
define('SECURE_AUTH_KEY',  '1$5idg;7?WsJwUv.XE8C3fNz)nSSszA?&4;x3Y@Uy}UoP@p[n,7|D~U7eDP#Yu/A');
define('LOGGED_IN_KEY',    '[JJ/-F[IUH+WXD#QC#~`Y`W^^{}t_u[%z2>uz@*`8^GA|r[KpgW*L6|mO}1b2:3I');
define('NONCE_KEY',        'q08X-GH2>]QMq/ZB!jcb-i-zaP|}k>inK8 HlY6I%L3aJKTLM*=U~+pusk$[Y` $');
define('AUTH_SALT',        'A?Dh<CXK+<&(p,5.%O%i0pZz[s:}m 54WQp1(;QG+_^W-l`$|=`ARbxG1y0XW+-p');
define('SECURE_AUTH_SALT', '_lN=}Ir,-G8BH,%+s7r9G* Aq5We&#:L1hncxX74H&dh&J(I@Hd8RcXyS>|*z(2#');
define('LOGGED_IN_SALT',   '>vT~/4V&JFV;.]:gpUjuc7dzV:=q1%&Q:?S20!!@F2w>,!thyrL+qE2~%dlNmGT;');
define('NONCE_SALT',       '4_XyEaM+GZoGTgQMSWx+!Wc>lL,=CYYT@[)D4x,7mJ?4vy{L,mIa+>qdO1]^[v-O');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique. 
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'wp_';

/** 
 * Pour les développeurs : le mode deboguage de WordPress.
 * 
 * En passant la valeur suivante à "true", vous activez l'affichage des
 * notifications d'erreurs pendant votre essais.
 * Il est fortemment recommandé que les développeurs d'extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de 
 * développement.
 */ 
define('WP_DEBUG', false); 

/* C'est tout, ne touchez pas à ce qui suit ! Bon blogging ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');