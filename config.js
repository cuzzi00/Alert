// ============================================================
//  CONFIGURAZIONE ALERT – CUZZI00
//  Modifica solo i valori tra virgolette. Salva e attendi
//  1-2 minuti che GitHub Pages aggiorni il sito.
// ============================================================

window.ALERT_CONFIG = {

  // --- TWITCH ------------------------------------------------
  // Client ID dell'app creata su https://dev.twitch.tv/console
  twitchClientId:  5ly13axf59gcb5fhpzthn4v7so6u6x,

  // --- KICK --------------------------------------------------
  // Apri https://kick.com/api/v2/channels/cuzzi00 e copia:
  //  - il primo "id" in alto  -> kickChannelId
  //  - "chatroom": { "id": ... } -> kickChatroomId
  // Lascia 0 per disattivare Kick.
  kickChannelId: 107633678
  kickChatroomId: 107344171

  // --- DURATA E VOLUME ---------------------------------------
  durataAlertSecondi: 6,     // quanto resta a schermo un alert
  volume: 0.8,               // da 0 a 1

  // --- SUONI DEGLI ALERT "FISSI" -----------------------------
  // Puoi sostituire i file con i tuoi (stesso nome) oppure
  // scrivere qui il nome di un altro mp3 caricato nel repository.
  suoni: {
    follow: "suono-follow.mp3",
    sub:    "suono-sub.mp3",
    resub:  "suono-sub.mp3",
    gift:   "suono-gift.mp3",
    bits:   "suono-gift.mp3",
    kicks:  "suono-gift.mp3",
    raid:   "suono-raid.mp3",
    premio: "suono-premio.mp3"   // riscattabili senza suono dedicato
  },

  // --- RISCATTABILI (punti canale Twitch / Kick) -------------
  // A sinistra il NOME ESATTO del premio (come lo hai scritto
  // su Twitch o Kick), a destra il file audio da riprodurre.
  // Aggiungi una riga per ogni premio, con la virgola alla fine.
  riscattabili: {
    "Esempio premio": "suono-premio.mp3",
    // "Urlo spaventoso": "urlo.mp3",
    // "Applauso": "applauso.mp3",
  }"Sirena": "Cuzzi 118.ogg",

  // Se true, i riscattabili mostrano anche il riquadro a schermo.
  // Se false, suonano soltanto (utile per i sound alert IRL).
  riscattabiliConRiquadro: true,

  // --- QUALI ALERT MOSTRARE ----------------------------------
  attivi: {
    follow: true, sub: true, resub: true, gift: true,
    bits: true, kicks: true, raid: true, premio: true
  },

  // --- POSIZIONE A SCHERMO -----------------------------------
  // "alto", "centro" oppure "basso"
  posizione: "alto"
};
