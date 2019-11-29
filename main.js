/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let num1 = [];
  let num2 = [];
  let res = [];
  let more = [];
  let less = [];
  let count = 0;
  
  recSLLins(l1,num1)
  recSLLins(l2,num2)
  
  if(num1.length > num2.length){
      more = num1;
      less = num2;
  }else{
      more = num2;
      less = num1
  }
  
  while(count < more.length){
      let temp = more[count] + (less[count] ? less[count] : 0);
      if(temp >= 10){
          if(count == more.length-1){
              res.push(temp%10);
              res.push(Math.floor(temp/10))
          }else{
              res.push(temp%10);
              more[count+1]++; 
          }
          
      }else{
          res.push(temp);
      }
      count++;
  }   
  return toLinkedList(res)
};
  
var recSLLins = function(el, temp){
  if(el.val || el.val == 0){
      temp.push(el.val)
  }
  if(el.next){
      return recSLLins(el.next, temp)
  }    
}

var toLinkedList= function(from){
  let counter = 0
  let resList = {
      val: 0,
      next: null
  };
  let currPos = resList;
  
  while(counter <= from.length-1){
      if(counter == from.length-1){
          currPos.val = from[counter];
          currPos.next = null
      }else{
          currPos.val = from[counter];
          currPos.next = {val: 0, next: null}
          currPos = currPos.next;             
      }
      counter++;
  }
  
  return resList;
}