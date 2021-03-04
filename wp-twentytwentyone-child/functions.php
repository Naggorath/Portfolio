<?php
/**
 * Twenty Twenty-One Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Twenty Twenty-One Child Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_twentytwentyone_CHILD_VERSION', time() );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {
	wp_enqueue_style( 'twentytwentyone-css', get_stylesheet_directory_uri() . '/style.css', array(), CHILD_THEME_twentytwentyone_CHILD_VERSION);
    wp_enqueue_script('twentytwentyone-js', get_stylesheet_directory_uri() . '/script.js', array(), twentytwentyone_CHILD_VERSION);
	
}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles');

