<h1>Project Name</h1>
Run <code>GitHub Actions</code> Locally with <code>nektos/act</code>



<h2>Project Description</h2>
This project has two simple <code>workflow</code> files .It explains how to 
run them locally using <code>act</code> 

<h2>Motivation</h2>

You start developing the <code>workflow</code> and want to check that it is 
working correctly. However, you have several constraints:

  <ul>
    <li><strong>Fast Feedback</strong>: Rapidly identify and resolve issues locally,
     accelerating the development cycle.</li>
    <li><strong>Reduced GitHub Pollution</strong>: Avoid unnecessary 
    <code>workflow</code> runs and clutter in your repository's history.</li>
    <li><strong>Cost Control</strong>: Eliminate <code>GitHub Actions</code> 
    usage costs by running <code>workflow</code>s locally.</li>
  </ul>



The solution is to run it locally using <code>nektos/act</code> 
But how do you do it? That's the motivation for this repo

<h2>How does <code>act</code> work</h2>
<p>When you run <code>act</code>, it reads in your <code>GitHub Actions</code>
 from .github/workflows/ and determines the set of actions that need to be run.
  It uses the <code>Docker</code> API to either pull or build the necessary images, 
  as defined in your <code>workflow</code> files, and finally determines the
   execution path based on the dependencies that were defined</p>

<p>Once it has the execution path, it then uses the <code>Docker</code> API to run 
containers for each action based on the images prepared earlier. The environment 
variables and filesystem are all configured to match what GitHub provides</p>


<h2>Installation</h2>

<p><a href='https://nektosact.com/installation/index.html'>Prerequisites for running <code>act</code></a> include:</p>

<ul>
<li>Install <code>Docker</code> . I am using Windows 10 , so I installed 
<code>Docker Desktop</code> 
<a href='https://docs.docker.com/desktop/setup/install/windows-install/'>here</a></li>
<li>Install <code>act</code> , 
following <a href='https://nektosact.com/installation/index.html'>this guide</a> 
i used chocolatey which is a packager manager for Windows 
<a href='https://nektosact.com/installation/chocolatey.html'>here</a> 

Make sure you run the following as administrator

```bash
choco install act-cli
```

This image show the results of the above command on my Windows 10 machine 
<img src='./figs/install-act-cli-using-choco.png'/>
</li>
</ul>

<h2>Remarks</h2>
<ul>
    <li>You can also use <code>winget</code> to install <code>act</code>. 
    It is part of Windows 10 as of version 1809.</li>
    <li>Notice that although this project uses the <code>vitest</code> package, 
    installing it was not mentioned here because it is installed by the runner.</li>
</ul>



<h2>Usage</h2>
The following are useful <code>act</code> commands :

<h3>Run all <code>workflow</code> file</h3>

```bash
act
```

<h3>Run specific <code>workflow</code> job</h3>

```bash
act -j job_name
```

<h3>Run specific <code>workflow</code> file</h3>

```bash
act -w .github/workflows/your-workflow-file.yml
```

<h3>Show <code>act</code> version</h3>

Following this you can check <code>act</code> installation using

```bash
act --version
```

<h3>Show <code>act</code> help</h3>

```bash
act --help
```

<h3>List all <code>workflow</code> jobs</h3>
When you invoke <code>act</code> inside a project with workspace 

```bash
act -l
```

It will list the <code>workflow</code> files as shown in the following image

<img src='./figs/act-list.png'/>


<h2>Technologies Used</h2>
<ul>
<li><code>nektos/act</code></li>
<li><code>Docker</code></li>
<li><code>vitest</code></li>
</ul>

<h2>Demo</h2>
make sure the docker is run , simply run the docker desktop and look for the icon in the windows tray
run without package file and directories src , test



<h2>Points of Interest</h2>
<ul>
    <li><strong>Why is <code>Docker</code> used in <code>act</code></strong> : 
    <code>GitHub Actions</code> has a runner, which is a server that 
    processes the <code>workflows</code> jobs. <code>Docker</code> provides an 
    isolated environment that the runner can use, ensuring consistency and 
    proper configuration</li>
   <li><strong>Manage and Run Act Directly From VS Code!</strong> : 
   Check <a href='https://sanjulaganepola.github.io/github-local-actions-docs/'>here</a>
    it is recommended by <code>act</code> 
    <a href='https://github.com/nektos/act'>docs</a></li>
</ul>

<h2>References</h2>
<ul>
    <li><a href='https://github.com/nektos/act'>GitHub repository for <code>act</code></a></li>
    <li><a href='https://youtu.be/x239z6DdE0A?si=Y0pzO1AkyiMUoe-T'> Introduction to <code>GitHub Actions</code>: Learn Workflows with Examples </a></li>
</ul>

