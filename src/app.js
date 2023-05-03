let pronoun = ["her", "his", "their", "our", "my"];
let adj = ["pretty", "hairy", "small", "great", "bad"];
let noun = ["book", "leg", "table", "box", "cat", "dog"];
let dom = [".com", ".org", ".co", ".gov", ".edu"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.lenght; j++) {
    {
      for (let k = 0; k < noun.lenght; j++) {
        {
          for (let m = 0; m < dom.lenght; j++) {
            // eslint-disable-next-line no-console
            console.log("${pronoun[i]}${adj[j]}${noun[k]}${dom[m]}");
          }
        }
      }
    }
  }
}
