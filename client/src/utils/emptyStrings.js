// function to handle empty input strings
export const checkEmptyStrings = (
  longUrl,
  urlCode,
  func,
  message0,
  message1,
  message2
) => {
  if (!longUrl && !urlCode) {
    let longBox = document.getElementById("longURL-box");
    longBox.style.borderWidth = "6px";
    longBox.style.borderColor = "red";

    let newBox = document.getElementById("newURL-box");
    newBox.style.borderWidth = "6px";
    newBox.style.borderColor = "red";

    func(message0);
    return true;
  }

  if (!longUrl) {
    let longBox = document.getElementById("longURL-box");
    longBox.style.borderWidth = "6px";
    longBox.style.borderColor = "red";
    func(message1);
    return true;
  }

  if (!urlCode) {
    let newBox = document.getElementById("newURL-box");
    newBox.style.borderWidth = "6px";
    newBox.style.borderColor = "red";
    func(message2);
    return true;
  }
};

// messages returned to handle empty input strings
export const emptyStringMessages = [
  "Long URL & URL Name required",
  "Long URL required",
  "URL Name required",
];

export const resetStyles = () => {
  let longBox = document.getElementById("longURL-box");
  longBox.style.borderWidth = "0px";

  let newBox = document.getElementById("newURL-box");
  newBox.style.borderWidth = "0px";
};
