<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width">
        <title><?php if(!is_home()) { if(is_category()) { single_cat_title(''); ?>  <?php } elseif(is_page()) { the_title(); ?> - <?php } elseif(is_single()) { echo the_title() . " -"; }} ?> <?php bloginfo('title'); ?></title>
        <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
        <meta name="description" content="<?php bloginfo('description'); ?>">
        <meta name="author" content="Digital Grief - Alan Fall">
        <meta name="keywords" content="">
        
        <!-- Open Graph -->
        <meta property="og:title" content="<?php bloginfo('title'); ?> <?php if(is_single()) { ?> | <?php the_title(); } ?> " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="<?php if(is_single()) { echo urlencode(the_permalink()); } else { bloginfo('url'); }; ?>" />
        <meta property="og:image" content="<?php if(is_single()) { $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID, 'default-size') ); echo $url .'"'; } else {?> <?php bloginfo('template_directory'); ?>/img/assets/opengraph.jpg" <?php }?> />
        <meta property="og:description" content="<?php bloginfo('description'); ?>" />
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>