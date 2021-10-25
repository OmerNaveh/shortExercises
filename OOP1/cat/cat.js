
class Cat{
    
    constructor(_tiredness, _hunger, _lonliness, _happiness){
    this.tiredness =  _tiredness;
    this.hunger =  _hunger;
    this.lonliness = _lonliness;
    this.happiness = _happiness;
    }
    pet(time){
        this.happiness+=time;
        this.tiredness+=(time/2);
        this.lonliness-=time;
        return this
    }
    sleep(time){
        this.tiredness-=time;
        this.hunger+= (time/2);
        this.lonliness-= (time/2);
        return this
    }
    play(time){
        this.happiness+=time;
        this.lonliness-=time;
        this.hunger+= (time/2);
        return this
    }
    feed(amount){
        this.hunger-=amount;
        this.happiness+=(amount/2);
        return this
    }
    status(){
        console.log(`Hunger: ${this.hunger}, Tirdeness: ${this.tiredness}, Happiness: ${this.happiness}, lonliness: ${this.lonliness}`);
        if(this.hunger>5){
            console.log(`Your Cat is really hungry`);
        }
        if(this.tiredness>5){
            console.log(`Your Cat is really tired`);
        }
        if(this.lonliness>5){
            console.log(`Your Cat is really lonely`);
        }
        if(this.happiness<3){
            console.log(`Your Cat is kind of sad- you should increase his happiness`);
        }
        return this
    }
}

const meow = new Cat(1,1,1,1)
meow.feed(10).status();
