function addNote() {
    const input = document.getElementById("noteInput");
    const text = input.value.trim();
    if (text) {
      const div = document.createElement("div");
      div.className = "note";
      div.textContent = text;
      document.getElementById("notes").appendChild(div);
      input.value = "";
    }
  }
  