
import unittest
import reflective_note
import replicate

class ReflectiveTests(unittest.TestCase):

    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())

    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):
            s.split(2)
    
    # def test_get_data(self):
    #     lab = 3 
    #     documents = [
    #         {"lab": 3, "note": "pretend reflection"},
    #         {"lab": 3, "note": "This lab is lab 3"},
    #         {"lab": 1, "note": "example reflection"}
    #     ]

    #     result = rn.FirebaseExtension.get_data(lab, documents)

    #     expected_result = [
    #         {"lab": 3, "note": "pretend reflection"},
    #         {"lab": 3, "note": "This lab is lab 3"}
    #     ]

    #     self.assertEqual(result, expected_result)


if __name__ == '__main__':
    unittest.main()