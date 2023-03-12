const reaction = document.getElementById('reaction_result');
const verbal = document.getElementById('verbal_result');
const visual = document.getElementById('visual_result');
const memory = document.getElementById('memory_result');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const json = JSON.parse(xhr.responseText);
    reaction.innerText = json[0].score + " ";
    memory.innerText = json[1].score + " ";
    verbal.innerText = json[2].score + " ";
    visual.innerText = json[3].score + " ";
      }
};
xhr.send();
