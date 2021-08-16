// add evenhandeler
// function getInput() {
//     const depositeInput = document.getElementById('Deposite-input');
//     const depositeText = depositeInput.value;
//     const deposteAmount = parseFloat(depositeText)
//     return deposteAmount
// }
document.getElementById('Deposite-btn').addEventListener('click', function() {
    const depositeInput = document.getElementById('Deposite-input');
    const depositeText = depositeInput.value;
    const deposteAmount = parseFloat(depositeText)
        // get current deposite
    const depositeTotal = document.getElementById('depositeTotal')
    const idepositeText = depositeTotal.innerText;
    const previousDepositeText = parseFloat(idepositeText)
        // console.log(depositeText);
    depositeTotal.innerText = previousDepositeText + deposteAmount;

    // updete balence
    const balenceTotal = document.getElementById('balenceTotal')
    const balenceText = balenceTotal.innerText;
    const previousTotal = parseFloat(balenceText)
    balenceTotal.innerText = previousTotal + deposteAmount;









    // clear all
    depositeInput.value = '';
});
// withdrow
document.getElementById('widrow-btn').addEventListener('click', function() {
    const widthdrorwInput = document.getElementById('widrow-input')
    const withDrowText = parseFloat(widthdrorwInput.value);
    // update wqithdeow
    const withDrowTotal = document.getElementById('WithDrow-total');
    const withDrowTotalText = parseFloat(withDrowTotal.innerText);
    withDrowTotal.innerText = withDrowTotalText + withDrowText;
    // update
    const balenceTotal = document.getElementById('balenceTotal');
    const balenceText = parseFloat(balenceTotal.innerText);
    balenceTotal.innerText = balenceText - withDrowText;





    // clear
    widthdrorwInput.value = '';
})