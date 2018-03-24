 class Table {
     constructor(props) { //props is object {columns : 5}
         this.coulmns = props.cloumns; // 5
         if (props.columns == undefined || Array.isArray(props.cloumns)) {
             throw new Error('columns should be an array');
         }
         this.columns = props.columns || 0;
     }
     createTable() {
         let t = '<table><tr>';
         // this.coulmns.forEach(function(v,i){
         for (var i = 0; i < this.coulmns.length; i++) {
             let obj = this.coulmns[i];
             let th = `<th id = '${objobj.id}' style='${obj.style}' '${obj.text}'`;
             t = t + th;
         }
         // });
         t = t + '</tr></table>';
         return t;
     }
 }
 class CampaignTable extends Table {
     constructor(props) {
         super(props);
     }
 }
 var ct = new CampaignTable({
     columns: ['<td></td>']
 });
 console.log(ct.createTable());