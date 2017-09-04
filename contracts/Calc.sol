pragma solidity ^0.4.0;

contract Calc {
    uint result;
    function addNumbers(uint x, uint y) returns (uint){
        result = x+y;
        return result;
    }

    function subNumbers(uint x, uint y) returns (uint){
        if(x>y)
        result = x-y;
        else
        result = y-x;
        return result;
    }

    function mulNumbers(uint x, uint y) returns (uint){
        result = x*y;
        return result;
    }

    function divNumbers(uint x, uint y) returns (uint){
        result = x/y;
        return result;
    }

}