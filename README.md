<h1>Project Name</h1>
Run GitHub Actions Locally with <code>act</code>



<h2>Project Description</h2>
This project has two simple workflow files .It explains how to run them locally using <code>act</code> 

<h2>Motivation</h2>

You start developing the workflow and want to check that it is working correctly. However, you have several constraints:

  <ul>
    <li><strong>Fast Feedback</strong>: Rapidly identify and resolve issues locally, accelerating the development cycle.</li>
    <li><strong>Reduced GitHub Pollution</strong>: Avoid unnecessary workflow runs and clutter in your repository's history.</li>
    <li><strong>Cost Control</strong>: Eliminate GitHub Actions usage costs by running workflows locally.</li>
  </ul>



The solution is to run it locally using <code>nektos/act</code> 
But how do you do it? That's the motivation for this repo

<h2>How does <code>act</code> work</h2>
<p>When you run <code>act</code>, it reads in your GitHub Actions from .github/workflows/ and 
determines the set of actions that need to be run. It uses the Docker API 
to either pull or build the necessary images, as defined in your workflow files, 
and finally determines the execution path based on the dependencies that were defined</p>

<p>Once it has the execution path, it then uses the Docker API to run containers 
for each action based on the images prepared earlier. The environment variables 
and filesystem are all configured to match what GitHub provides</p>


<h2>Installation</h2>

<a href='https://nektosact.com/installation/index.html'>prerequisites for running <code>act</code></a> this actually includes

<ul>
<li>Install docker . i am using Windows 10 , so installed docker desktop <a href='https://docs.docker.com/desktop/setup/install/windows-install/'>here</a></li>
<li>Install <code>act</code> , follow <a href='https://nektosact.com/installation/index.html'>this</a> 
i will use chocolatey which is a packager manager for windows <a href='https://nektosact.com/installation/chocolatey.html'>here</a> 

make sure you run the following as administrator

```bash
choco install act-cli
```
This image show the results of the above command on my windows 10 machine 
<img src='./figs/install-act-cli-using-choco.png'/>


</li>
</ul>

remarks 
<ul>
<li>You can also use winget to install <code>act</code> . it is part of Windows 10 as of version 1809</li>
<li>Notice that altough this project has package - vitest, 
installating it was not mentioned here, because it is installed by the runner</li>
</ul>


<h2>Usage</h2>
The following are usefull <code>act</code> commands

<h3>Run all workflow file</h3>

```bash
act
```

<h3>Run specific workflow job</h3>

```bash
act -j job_name
```

<h3>Run specific workflow file</h3>

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

<h3>List all workflow jobs</h3>
When you invoke <code>act</code> inside a project with workspace 

```bash
act -l
```

it will list the workflows files as shown in the following image

<img src='./figs/act-list.png'/>


<h2>Technologies Used</h2>
<ul>
<li>nektos/act</li>
<li>docker</li>
<li>vitest</li>
</ul>


<h2>Demo</h2>
run like in files 1,2,3 and copy output



<h2>Points of Interest</h2>
<ul>
    <li>Why is docker used in <code>act</code> : GitHub Actions has a runner, which is a server that 
    processes the workflows jobs. Docker provides an isolated environment that the 
    runner can use, ensuring consistency and proper configuration</li>
   <li>Manage and Run Act Directly From VS Code! : check <a href='https://sanjulaganepola.github.io/github-local-actions-docs/'>here</a> it is recommended by <code>act</code> <a href='https://github.com/nektos/act'>docs</a></li>
</ul>

<h2>References</h2>
<ul>
    <li><a href='https://github.com/nektos/act'>GitHub repository for <code>act</code></a></li>
    <li><a href='https://youtu.be/x239z6DdE0A?si=Y0pzO1AkyiMUoe-T'> Introduction to GitHub Actions: Learn Workflows with Examples </a></li>
</ul>

