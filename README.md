##Welcome to Koding...You've said goodbye to localhost!

Koding is a cloud-based development platform that allows you to:
- Develop applications in the cloud
- collaborate with others in real-time
- learn through interation with a community of like-minded developers

Koding VMs run Ubuntu 14.04 and are fully functional development
machines where you can write code in any programming language
that is supported by Ubuntu/Linux. Things like ruby, perl, gcc,
python, php, go, node are preinstalled on your VM. You can start
writing code right away without the need for new installs!

Here are a few additional commonly asked questions. For more, head
over to Koding University at http://learn.koding.com

Some things to note:
- The default web server root is linked to /home/bdaves/Web
  so any file placed inside that directory will automatically
  be visible from this URL:
  http://ubkkb76eaabe.bdaves.koding.io

- You can access this VM using any sub-domains that you may have
  set up. To learn more about sub-domains and how to set them up,
  please read this article on Koding University:
  http://learn.koding.com/domains

- To run a command as the `root` user, prefix any command with
  `sudo <command>`. Remember, with great power, comes great
  responsibility! :)

Common questions:
================
# How can I find out which packages are installed on my VM?

Run the command: `dpkg --get-selections | grep -v deinstall` to get
a list of all installed packages. If a particular package is not
installed, go ahead and install it using `sudo apt-get install
<package name>`. Using this command you can install databases like
postgres, MySQL, Mongo, etc.

# What is my sudo password?

By default, you sudo password is blank. Most people like it that
way but if you prefer, you can use the `sudo passwd` command and
change the default (blank) password to something more secure.

# How do I poweroff my VM?
For our free acccounts, the VMs will power off automatically after
60 minutes of inactivity. However, if you wish to poweroff your
VM manually, please use the VM settings panel to achieve that.


For more questions and FAQ, head over to http://learn.koding.com
or send us an email at support@koding.com
