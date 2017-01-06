//
var db = require('./models');

var flashCards = [
{ "Italian" : "Andare",
"English": "go", "Learned" : true, }, 

{ "Italian" : "Arrivederci", "English": "Goodbye", "Learned" : true, }, 
{ "Italian" : "Brother", "English": "Fratello", "Learned" : true, }, 
{ "Italian" : "Buon pomeriggio", "English": "Good afternoon", "Learned" : true, }
// { "Italian
// " : "Buonanotte", "English": "Good night", "Learned" : true, }, 
// { "Italian
// " : "Buonasera", "English": "Good evening", "Learned" : true, }, 
// { "Italian
// " : "Buongiorno", "English": "Good morning", "Learned" : true, }, 
// { "Italian
// " : "Buono!", "English": "Delicious!", "Learned" : true, }, 
// { "Italian
// " : "Cloudy", "English": "Nuvoloso", "Learned" : true, }, 
// { "Italian
// " : "Cold", "English": "Freddo", "Learned" : true, }, 
// { "Italian
// " : "Dad", "English": "Papà", "Learned" : true, }, 
// { "Italian
// " : "Daughter", "English"": ""Figlia", "Learned" : true, }, 
// { "Italian
// " : "Dov’e la toilette?", "English": "where is the toilet?", "Learned" : true, }, 
// { "Italian
// " : "Dove?", "English": "Where", "Learned" : true, }, 
// { "Italian
// " : "Fare", "English": "do", "Learned" : true, }, 
// { "Italian
// " : "Father", "English": "Padre", "Learned" : true, }, 
// { "Italian
// " : "Giovedì", "English": "Thursday", "Learned" : true, }, 
// { "Italian
// " : "Grazie!", "English": "Thank you!", "Learned" : true, }, 
// { "Italian
// " : "Hot", "English": "Caldo", "Learned" : true, }, 
// { "Italian
// " : "iao", "English": " Hello", "Learned" : true, }, 
// { "Italian
// " , "Lunedì", "English": "Monday", "Learned" : true, }
// ];
//  // { "Italian
//  " : "Martedì", "English": "Tuesday", "Learned" : true, }, { "Italian
//  " : "Mercoledì", "English": "Wednesday", "Learned" : true, }, { "Italian
//  " : "Mi porti a questo indirizzo, por favore", "English": "Take me to this address, please", "Learned" : true, }, { "Italian
//  " : "Mom", "English": "Mamma", "Learned" : true, }, { "Italian
//  " : "Mother", "English": "Madre", "Learned" : true, }, { "Italian
//  " : "No", "English": "No", "Learned" : true, }, { "Italian
//  " : "Potere", "English": "can", "Learned" : true, }, { "Italian
//  " : "Preparare", "English": "make", "Learned" : true, }, { "Italian
//  " : "Ridere", "English", "Laugh", "Learned" : true, }, { "Italian
//  " : "Sabato", "English": "Saturday", "Learned" : true, }, { "Italian
//  " : "Sì", "English": "Yes.", "Learned" : true, }, { "Italian
//  " : "Si gira a destra", "English": "Turn right", "Learned" : true, }, { "Italian
//  " : "Si gira a sinistra", "English": "Turn left", "Learned" : true, }, { "Italian
//  " : "Si va diritto", "English": "Go straight ahead", "Learned" : true, }, { "Italian
//  " : "Si va in quella direzione", "English": "Go that way", "Learned" : true, }, { "Italian
//  " : "Si va indietro", "English": "Go back", "Learned" : true, }, { "Italian
//  " : "sidewalk", "English"": """, "Learned" : true, }, { "Italian
//  " : "Sister", "English": "Sorella", "Learned" : true, }, { "Italian
//  " : "Son", "English": "Siglio", "Learned" : true, }, { "Italian
//  " : "Sono (nome)", "English": "I’m (name)", "Learned" : true, }, { "Italian
//  " : "The rain", "English", "La pioggia", "Learned" : true, }, { "Italian
//  " : "The sun", "English": "Il sole", "Learned" : true, }, { "Italian
//  " : "The temperature", "English", "La temperature", "Learned" : true, }, { "Italian
//  " : "Usare", "English": "use", "Learned" : true, }, { "Italian
//  " : "Vedere", "English": "see", "Learned" : true, }, { "Italian
//  " : "Venerdì", "English": "Friday", "Learned" : true, }, { "Italian
//  " : "Venire", "English": "come", "Learned" : true, }, { "Italian
//  " : "Windy", "English": "C’è vento", "Learned" : true, }, { "Italian
//  " : "Wine", "English": "Vino", "Learned" : true, }, { "Italian
//  " : "Toasts", "English": "Bruschetta", "Learned" : true, }, { "Italian
//  " : "The waitress", "English", "La cameriera", "Learned" : true, }, { "Italian
//  " : "The waiter", "English": "Il cameriere", "Learned" : true, }, { "Italian
//  " : "The spoon", "English": "Il cucchiaio", "Learned" : true, }, { "Italian
//  " : "The salt", "English": "Il sale", "Learned" : true, }, { "Italian
//  " : "The plate", "English": "Il piatto", "Learned" : true, }, { "Italian
//  " : "The pitcher", "English", "La caraffa", "Learned" : true, }, { "Italian
//  " : "The pepper", "English": "Il pepe", "Learned" : true, }, { "Italian
//  " : "The napkin", "English": "Il tovagliolo", "Learned" : true, }, { "Italian
//  " : "The menu", "English": "Il menu", "Learned" : true, }, { "Italian
//  " : "The knife", "English": "Il coltello", "Learned" : true, }, { "Italian
//  " : "The fork", "English", "La forchetta", "Learned" : true, }, { "Italian
//  " : "The cup", "English", "La tazza", "Learned" : true, }, { "Italian
//  " : "The check", "English": "Il conto", "Learned" : true, }, { "Italian
//  " : "The chair", "English", "La sedia", "Learned" : true, }, { "Italian
//  " : "The bowl", "English": "Scodella", "Learned" : true, }, { "Italian
//  " : "Sto bene", "English": "I’m fine", "Learned" : true, }, { "Italian
//  " : "Sono (nome)", "English": "I’m (name)", "Learned" : true, }, { "Italian
//  " : "Snack", "English": "Merenda", "Learned" : true, }, { "Italian
//  " : "Si", "English": "Yes", "Learned" : true, }, { "Italian
//  " : "Ristorante", "English": "Restaurant", "Learned" : true, }, { "Italian
//  " : "Prego", "English": "You’re welcome", "Learned" : true, }, { "Italian
//  " : "Pork", "English": "Maiale", "Learned" : true, }, { "Italian
//  " : "Piacere", "English": "Pleased to meet you", "Learned" : true, }, { "Italian
//  " : "Per favore", "English": "Please", "Learned" : true, }, { "Italian
//  " : "Parla inglese?", "English": "Do you speak English?", "Learned" : true, }, { "Italian
//  " : "Onion", "English", "La cipolla", "Learned" : true, }, { "Italian
//  " : "Noodles", "English", "Le tagliatelle", "Learned" : true, }, { "Italian
//  " : "Non parlo molto bene italiano", "English": "I don’t speak Italian very well", "Learned" : true, }, { "Italian
//  " : "Non parlo italiano", "English": "I don’t speak Italian", "Learned" : true, }, { "Italian
//  " : "Non capisco", "English": "I don’t understand", "Learned" : true, }, { "Italian
//  " : "No", "English": "No", "Learned" : true, }, { "Italian
//  " : "Mi scusi", "English": "Excuse Me/Pardon Me", "Learned" : true, }, { "Italian
//  " : "Mi dispiace", "English": "I’m sorry", "Learned" : true, }, { "Italian
//  " : "Mi chiamo…", "English": "My name is…", "Learned" : true, }, { "Italian
//  " : "Meat", "English": "Carne", "Learned" : true, }, { "Italian
//  " , "Lunch", "English": "Prazo", "Learned" : true, }, { "Italian
//  " : "Italian ice cream", "English": "Gelato", "Learned" : true, }, { "Italian
//  " : "Italian cream cheese", "English": "Mascarpone", "Learned" : true, }, { "Italian
//  " : "Grazie", "English": "Thank you", "Learned" : true, }, { "Italian
//  " : "Fish", "English": "Pesce", "Learned" : true, }, { "Italian
//  " : "EVOO", "English": "Olio extra vergine di oliva", "Learned" : true, }, { "Italian
//  " : "Espresso", "English": "Caffè", "Learned" : true, }, { "Italian
//  " : "Espresso with milk foam", "English": "Macchiato", "Learned" : true, }, { "Italian
//  " : "Egg", "English": "Uovo", "Learned" : true, }, { "Italian
//  " : "Dinner", "English": "Cena", "Learned" : true, }, { "Italian
//  " : "Come ti chiami?", "English": "What is your name?", "Learned" : true, }, { "Italian
//  " : "Come stai?", "English": "How are you?", "Learned" : true, }, { "Italian
//  " : "Chocolate", "English": "Il cioccolato", "Learned" : true, }, { "Italian
//  " : "Chicken", "English": "Pollo", "Learned" : true, }, { "Italian
//  " : "Cheese", "English": "Formaggio", "Learned" : true, }, { "Italian
//  " : "Cappuccino", "English": "Cappuccino", "Learned" : true, }, { "Italian
//  " : "Buongiorno", "English": "Good morning", "Learned" : true, }, { "Italian
//  " : "Buonasera", "English": "Good evening", "Learned" : true, }, { "Italian
// //  " : "Buonanotte", "English": "Good night", "Learned" : true, }, { "Italian
// //  " : "Buona giornata", "English": "Have a nice day!", "Learned" : true, }, { "Italian
// //  " : "Buon pomeriggio", "English": "Good afternoon", "Learned" : true, }, { "Italian
//  " : "Breakfast", "English": "Colazione", "Learned" : true, }, { "Italian
//  " : "Bread", "English": "Pane", "Learned" : true, }, { "Italian
//  " : "Benvenuto", "English": "Welcome", "Learned" : true, }, { "Italian
//  " : "Bene grazie. E tu?", "English": "I’m fine, thanks. And you?", "Learned" : true, }, { "Italian
//  " : "Balsamic vinegar", "English": "Aceto Balsamico", "Learned" : true, }, { "href="/original_wiItalian
//  " : "Arrivederci", "English": "Goodbye", "Learned" : true, }];

];

db.Flashcard. create(newFlashcard, function(err, flashcard){
      if (err) { return console.log(' flashcard db err', err); }
      console.log(newFlashcard.length + "Flashcards added");


    });



