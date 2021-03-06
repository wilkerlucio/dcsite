Hello!  Welcome to the repository for Dave Conservatoire main website app.  

### Mission

Dave Conservatoire aims to provide a world class music education for the world for free.  It is a non-profit organisation established in 2011 by musician and teacher David Rees.  Since then the site has delivered over 750,000 video music lessons and 1,200,000 interactive exercises to students in over 50 countries (August 2015).  

### How can I get involved?

All the of the site's code is open source in the hope that anyone who would like to could contribute their time, skills and expertise to the project, knowing that their contributions will help thousands of people experience the joy of having music in their lives.

At the moment there are two main ways you can help with developing the Dave Conservatoire app:

1. Develop javascript exercises to support the video content.  We are in the process of making this easier! Check back soon!

2. Help with fixing bugs and adding features to the website app.

The best way to get started with this would be:

* Read up on the site's [technical architecture](https://github.com/daveconservatoire/dcsite/wiki/Site-Architecture).
* Learn how to [install a copy on your local machine](https://github.com/daveconservatoire/dcsite/wiki/Installing-the-application-on-your-local-machine).
* Learn a bit more about Yii and how the application is structured
* Choose an issue from the bugs/requested features list
* When you've got something you'd like us to consider for inclusion you can [create a pull request](https://help.github.com/articles/creating-a-pull-request). 

## Requirements

Dave Conservatoire website app uses the following technologies:

* [PHP] (http://www.php.net) (sorry)
* [Yii] (http://www.yiiframework.com) - an MVC PHP framework which attempts to bring a level of good design to PHP web applications. 
* [MySQL] (http://www.mysql.com) - database for storing content structure and user data
* [Youtube] (http://www.youtube.com)- for video playback and storage
* [Khan Academy Exercises Framework] (http://www.github.com/khan/khan-exercises) - a modified version of [Khan Academy's](http://www.khanacademy.org) javascript framework for generating randomised exercises from simple HTML templates. 

If you want to run a local copy - you'll probably need something like: 

* [WAMP] (http://www.wampserver.com/en/) - (Windows, Apache, MySQL and PHP)
* [MAMP] (https://www.mamp.info/en/) (Mac, Apache, MySQL and PHP)

## Installation 

This could definitely be a *lot* easier, but for now here's how to install the Dave Conservatoire webapp on your local machine.  You need to have PHP, Yii, Apache, MySQL installed.  

I made a video where I install the application - http://www.youtube.com/watch?v=7y-1gs6RmTc

1. Make sure you have git installed (for me the desktop gui for Mac or Windows is the way to go!).

2. Clone a copy of `http://www.github.com/daveconservatoire/dcsite.git`

3. Create a MySQL database.

4. Import - [this file](https://github.com/daveconservatoire/dcsite/blob/master/dbschema/dbschema.sql) - to get hold the DB table structure and some test data.

5. Download the [YiiFramework](https://github.com/yiisoft/yii/releases/download/1.1.17/yii-1.1.17.467ff50.zip).

6. Extract the YiiFramework into some folder, if you are using MAMP you may wanna place at it Library folder (check the video for more details).

7. Rename `/.htaccess.example` to `/.htaccess` - this file assumes you are running the site from a directory called /dcsite - you can change this or remove the line altogether if you're running at root. 

8. Change the file `/protected/config/secrets.example.php` to `/protected/config/secrets.php`.

9. Update `secrets.php` with your `yii.php` location, DB information and (optionally) Google/Facebook Authentication apps.  I keep my yii directory outside my public folder, so I put in `/../../Library/yii/framework/yii.php`.

10.  Change the permissions on `/protected/runtime` to be written by the server.

11.  Fire up your webserver and you should be up and running!

