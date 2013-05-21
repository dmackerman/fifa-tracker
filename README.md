heroku-seed
===========

Heroku seed - it is a skeleton of web app, which contains next features:

    NodeJS with Express
    Jade template enjine
    Compass and SASS
    AngularJS framework
    Twitter bootstrap framework   

Getting started
--------------

Clone this seed to your pc:

    $ cd path/to/root
    $ git clone https://github.com/artem-malieiev/heroku-seed.git
    $ cd heroku-seed
    
Installing `Heroku Toolbelt` : 

    $ wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh

Log in using the email address and password you used when creating your Heroku account:

    $ heroku login
    Enter your Heroku credentials.
    Email: adam@example.com
    Password:
    Could not find an existing public key.
    Would you like to generate one? [Yn]
    Generating new SSH public key.
    Uploading ssh public key /Users/adam/.ssh/id_rsa.pub
    
Now use `npm` to install your dependencies locally:

    $ npm install
    
You can now start your application locally using `Foreman` (CTRL+C to exit):
    
    $ foreman start   
    
Commit changes:

    $ git commit -a -m "skeleton was created"
    
Create heroku app:

    $ heroku craate <name_of_your_app>

Deploy app:

    $ git push heroku master
    Counting objects: 343, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (224/224), done.
    Writing objects: 100% (250/250), 238.01 KiB, done.
    Total 250 (delta 63), reused 0 (delta 0)

    -----> Node.js app detected
    -----> Resolving engine versions
       Using Node.js version: 0.10.3
       Using npm version: 1.2.18
    -----> Fetching Node.js binaries
    -----> Vendoring node into slug
    -----> Installing dependencies with npm
       ....
       Dependencies installed
    -----> Building runtime environment
    -----> Discovering process types
       Procfile declares types -> web

    -----> Compiled slug size: 4.1MB
    -----> Launching... done, v9
       http://<name_of_your_app>.herokuapp.com deployed to Heroku

    To git@heroku.com:<name_of_your_app>.git
    * [new branch]      master -> master
    
    
Now we can visit our app on `http.<name_of_your_app>.herokuapp.com`
                        srg
