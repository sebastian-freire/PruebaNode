async function main() {
  //Imprimo por consola Hola mundo
  console.log("Hola mundo");

  const req = await fetch(
    "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
  );
  if (req.ok) {
    const data = await req.json();
    console.log(data.docs[0].author_name);
  }
}
main();
