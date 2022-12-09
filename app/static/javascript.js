(function(win,doc){
    'use  strict';
// Verificar se o user quer mesmo apagar os dados
   if(doc.querySelector('.btnDel')){
   let btnDel = doc.querySelectorAll('.btnDel')
   for (let i=0; i < btnDel.length; i++){
        btnDel[i].addEventListener('click', function(event){
            if(confirm('Deseja mesmo apagar esse dado?')){
                return true;
                }else{
                    event.preventDefault();
                }
            });
         }
       }
}) (window, document);