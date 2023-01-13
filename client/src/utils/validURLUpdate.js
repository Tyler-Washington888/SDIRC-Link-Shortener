export const checkIsValidURLUpdate = (str, func) => {
  // ensure str is three characters long
  if (str.length < 3) {
    let newBox = document.getElementsByClassName("update-newURL-input")[0];
    newBox.style.borderWidth = "6px";
    newBox.style.borderColor = "red";
    func("New URL Name must be at least three characters.");
    return true;
  }

  // because I don't know regex yet lol
  const valid = {
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true,
    G: true,
    H: true,
    I: true,
    J: true,
    K: true,
    L: true,
    M: true,
    N: true,
    O: true,
    P: true,
    Q: true,
    R: true,
    S: true,
    T: true,
    U: true,
    V: true,
    W: true,
    X: true,
    Y: true,
    Z: true,
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
    _: true,
    ".": true,
    "-": true,
    "~": true,
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };

  for (let i = 0; i < str.length; i++) {
    if (valid[str[i]] == undefined) {
      let newBox = document.getElementsByClassName("update-newURL-input")[0];
      newBox.style.borderWidth = "6px";
      newBox.style.borderColor = "red";

      func(
        "URL Name can only contain the following characters: [A-Za-z0-9_.-~]"
      );
      return true;
    }
  }
};

export const handleServerErrorsUpdate = (string, func) => {
  switch (string) {
    case "Url name is taken":
      func("URL Name is taken");
      let newBoxx = document.getElementsByClassName("update-newURL-input")[0];
      newBoxx.style.borderWidth = "6px";
      newBoxx.style.borderColor = "red";
      break;
    case "Error updating link":
      func(
        "Server is down. Please try again soon and contact tech support if error persists."
      );
      break;
  }
};
