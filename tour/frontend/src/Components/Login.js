class auth{

    construtor(){
    this.a=false;
     localStorage.clear();
    }
    Login(){
    this.a=true;
    localStorage.setItem("login",this.a);
    //return this.login;
    }
    islogedin(){
    return this.a;
    }

}
export default new auth();