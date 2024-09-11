from calculator import square

#def main():
#    test_sqaure3()
#
#def test_sqaure():
#    if square(2) != 4:
#        print("2 squared was not 4")
#    if square(3) != 9:
#        print("3 square waas not 9")
#
## assert
### assert allows us to assert us if something is true
#def test_sqaure2():
#    try:
#        assert square(2) == 4
#    except AssertionError:
#        print("2 squared was not 4")
#    try: 
#        assert square(3) == 9
#    except:
#        print("3 squared was not 9")
#
# pytest
## a third party library to test our code

def test_sqaure():
    assert square(2) == 4 
    assert square(3) == 9
    assert square(-2) == 4
    assert square(-3) == 9

#if __name__ == "__main__":
#    main()
