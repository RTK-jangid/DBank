import Float "mo:base/Float";
import Debug "mo:base/Debug";
import Time "mo:base/Time";
actor Dbank{
  stable var current:Float =300;
  current:=300;

  stable var startTime=Time.now();
  startTime:=Time.now();
  public query func checkBalance():async Float {
    return current;
  };
  public func topUp(amount :Float){
    current +=amount;
    Debug.print(debug_show(current));
  };

  public func withdraw(amount:Float){
    if(amount<=current){
      current-=amount;
    }
    else{
      Debug.print("Not enough amount");
    }
  };
  public func interest(){
    let currentTime=Time.now();
    current:= current*(1.01** Float.fromInt((currentTime-startTime)/1000000000));
  };
}
 