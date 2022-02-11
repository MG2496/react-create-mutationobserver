const targetNode = document.getElementById('targetNode');
const input = document.getElementById('name');
const changeButtom = document.getElementById('change');
const addButtom = document.getElementById('add');

const config = {
    attributes: true,
    childList: true,
    subtree: true,
};

const callback = function(mutationList, observer){
    for (let mutation of mutationList){
        if (mutation.type === 'childList'){
            console.info('A child node has been added or changed.');
        }else if (mutation.type === 'attributes'){
            console.info(`the ${mutation.attributeName} attribute has been modified.`);
        }
    }
}

function add(){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    targetNode.appendChild(li);
}

function change(){
    targetNode.children[0].value = 10;

}

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

addButtom.addEventListener('click', add);
changeButtom.addEventListener('click', change);