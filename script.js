let dockerSubcommands = [
  {
    name: 'attach',
    usage: 'Attach local standard input, output, and error streams to a running container'
  },
    {
    name: 'build',
    usage: 'Build an image from a Dockerfile'
  },
      {
    name: 'commit',
    usage: "Create a new image from a container's changes"
  },
        {
    name: 'cp',
    usage: "Copy files/folders between a container and the local filesystem"
  },
   {
    name: 'create',
    usage: "Create a new container"
  },
     {
    name: 'diff',
    usage: "Inspect changes to files or directories on a container's filesystem"
  },
     {
    name: 'events',
    usage: "Get real time events from the server"
  },
     {
    name: 'exec',
    usage: "Run a command in a running container"
  },
     {
    name: 'export',
    usage: "Export a container's filesystem as a tar archive"
  },
     {
    name: 'history',
    usage: "Show the history of an image"
  },
     {
    name: 'images',
    usage: "List images"
  },
     {
    name: 'import',
    usage: "Import the contents from a tarball to create a filesystem image"
  },
     {
    name: 'info',
    usage: "Display system-wide information"
  },
     {
    name: 'inspect',
    usage: "Return low-level information on Docker objects"
  },
     {
    name: 'kill',
    usage: "Kill one or more running containers"
  },
     {
    name: 'load',
    usage: "Load an image from a tar archive or STDIN"
  },
     {
    name: 'login',
    usage: "Log in to a Docker registry"
  },
     {
    name: 'logout',
    usage: "Log out from a Docker registry"
  },
     {
    name: 'logs',
    usage: "Fetch the logs of a container"
  },
     {
    name: 'pause',
    usage: "Pause all processes within one or more containers"
  },
     {
    name: 'port',
    usage: "List port mappings or a specific mapping for the container"
  },
     {
    name: 'ps',
    usage: "List containers"
  },
     {
    name: 'pull',
    usage: "Pull an image or a repository from a registry"
  },
     {
    name: 'push',
    usage: "Push an image or a repository to a registry"
  },
       {
    name: 'rename',
    usage: "Rename a container"
  },
       {
    name: 'restart',
    usage: "Restart one or more containers"
  },
       {
    name: 'rm',
    usage: "Remove one or more containers"
  },
       {
    name: 'rmi',
    usage: "Remove one or more images"
  },
       {
    name: 'run',
    usage: "Run a command in a new container"
  },
       {
    name: 'save',
    usage: "Save one or more images to a tar archive (streamed to STDOUT by default)"
  },    
  {
    name: 'search',
    usage: "Search the Docker Hub for images"
  },
       {
    name: 'start',
    usage: "Start one or more stopped containers"
  },
         {
    name: 'stats',
    usage: "Display a live stream of container(s) resource usage statistics"
  },
         {
    name: 'stop',
    usage: "Stop one or more running containers"
  },
         {
    name: 'tag',
    usage: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE"
  },
         {
    name: 'top',
    usage: "Display the running processes of a container"
  },
         {
    name: 'unpause',
    usage: "Unpause all processes within one or more containers"
  },
         {
    name: 'update',
    usage: "Update configuration of one or more containers"
  },
         {
    name: 'version',
    usage: "Show the Docker version informations"
  },
         {
    name: 'wait',
    usage: "Block until one or more containers stop, then print their exit codes"
  } 
]

function createCard(name, usage) {
  return `<div class="card">
  <div class="cardTop">
  <h2>${name}</h2>
  </div>
  <div class="cardBottom hidden">
  <p>${usage}</p>
  </div>
</div>`
}

function addToPage (x) {
  document.querySelector("#content").innerHTML += createCard(dockerSubcommands[x].name,dockerSubcommands[x].usage)
}

for (i=0; i<dockerSubcommands.length; i++) {
  addToPage(i)
}