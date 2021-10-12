function one(a,b,c){

    if(two(a)+two(b)===two(c))
    {
        return true;
    }
    return false;
}

function two(param)
{
three(param,param)
}

function three(param1,param2)
{
    return param1*param2;
}