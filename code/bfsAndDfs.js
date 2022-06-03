const bfs = (node) => { 
    visited[node] = true;
    queue.equeue(node); 
     while (!queue.isEmpty()) {
         let visiting = queue.dequeue();
         console.log(`we visited ${visiting}`)
         for (let j = 0; j < graphAdj[visiting].length; j++) {
            if ((graphAdj[visiting][j] === 1) && (visited[j] === false)) {  
            visited[j] = true;
            queue.equeue(j);
           }
        }
      }
 }
 const dfs = (node) => { 
  stack.push(node);
  while (!stack.isEmpty()) {
     node = stack.pop();
     if (visited[node] == false) {
        visited[node] = true;
        console.log(`we visited ${node}`)
        for (let j = 0; j < graphAdj[node].length; j++) {
           if (graphAdj[node][j] === 1){
               stack.push(j);
            }
         }
    }
  }
}