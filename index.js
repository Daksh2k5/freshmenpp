// Creating an object for the details of each teacher
const PROFFESSORS = {
  'Abha Gupta': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Abhay Vidyarthi': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Abhishek Dilip Joshi': {
    'Teaching': '5',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Abhishek Shrivastav': {
    'Teaching': '4',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Akshara Makrarya': {
    'Teaching': '4',
    'Evaluation': '3',
    'Behaviour': '4',
    'Internals': '3',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Aakash Saxena': {
    'Teaching': '4',
    'Evaluation': '3',
    'Behaviour': '4',
    'Internals': '3',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Amit Kumar Singh': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Amit Thakur': {
    'Teaching': '3.75',
    'Evaluation': '3.25',
    'Behaviour': '3.75',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '4'
  },
  'Anand Motwani': {
    'Teaching': '3.5',
    'Evaluation': '4',
    'Behaviour': '4.5',
    'Internals': '4',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Anant Kumar Shukla': {
    'Teaching': '1',
    'Evaluation': '2',
    'Behaviour': '2',
    'Internals': '1.32',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '3'
  },
  'Anil Kumar Shukla': {
    'Teaching': '4',
    'Evaluation': '3.5',
    'Behaviour': '4.5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Anirban Bhowmik': {
    'Teaching': '4.125',
    'Evaluation': '3.3214',
    'Behaviour': '4.0535',
    'Internals': '3.982',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '9'
  },
  'Anita Yadav': {
    'Teaching': '3.35',
    'Evaluation': '4.65',
    'Behaviour': '4.5',
    'Internals': '4.15',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '7'
  },
  'Ankit Pal': {
    'Teaching': '3.5',
    'Evaluation': '3.44',
    'Behaviour': '3.72',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'Green',
    'noOfReviews': '5'
  },
  'Ankur Beohar': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Arindham Ghosh': {
    'Teaching': '1.5',
    'Evaluation': '2',
    'Behaviour': '1.5',
    'Internals': '2.5',
    'Average': 'Medium',
    'Overall': 'Bad',
    'Color': 'red',
    'noOfReviews': '2'
  },
  'Arindam Sadhukhan': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Arpita Banoria': {
    'Teaching': '4',
    'Evaluation': '5',
    'Behaviour': '4',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Ashish Tripathi': {
    'Teaching': '4',
    'Evaluation': '5',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Ashok Kumar Baral': {
    'Teaching': '3.33',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4.33',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '3'
  },
  'Atul Aman': {
    'Teaching': '2',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Avirup Das': {
    'Teaching': '3',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Azra Nazir': {
    'Teaching': '3',
    'Evaluation': '3',
    'Behaviour': '3',
    'Internals': '3',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Baseera A': {
    'Teaching': '3',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Benevatho Jaison A': {
    'Teaching': '4.8',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '5'
  },
  'Bhavana Bagherwal': {
    'Teaching': '4.6',
    'Evaluation': '4.2',
    'Behaviour': '4.2',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '5'
  },
  'Chandrama Swain': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '3.33',
    'Internals': '3.33',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Deep Chandra Uphadhya': {
    'Teaching': '2',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Dev Brat Gupta': {
    'Teaching': '2',
    'Evaluation': '2.33',
    'Behaviour': '3',
    'Internals': '2',
    'Average': 'Medium',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '3'
  },
  'Devraj Vishnu': {
    'Teaching': '3',
    'Evaluation': '5',
    'Behaviour': '4',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Dheeresh Soni': {
    'Teaching': '3.66',
    'Evaluation': '4.33',
    'Behaviour': '5',
    'Internals': '4.33',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '3'
  },
  'Dipankar Surthal': {
    'Teaching': '3.8',
    'Evaluation': '4.2',
    'Behaviour': '4.2',
    'Internals': '4.4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '5'
  },
  'Dipanjana Hazra': {
    'Teaching': '2',
    'Evaluation': '4',
    'Behaviour': '3',
    'Internals': '1',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Divya Haridas': {
    'Teaching': '4.5',
    'Evaluation': '4.83',
    'Behaviour': '4.83',
    'Internals': '4.83',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '6'
  },
  'Divya Thakur': {
    'Teaching': '3',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Dondu Harish': {
    'Teaching': '2',
    'Evaluation': '3',
    'Behaviour': '3',
    'Internals': '3',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'E Nirmala': {
    'Teaching': '4',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'G Prabhu Kannan': {
    'Teaching': '2',
    'Evaluation': '3',
    'Behaviour': '4',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'G R Hemlakshmi': {
    'Teaching': '3',
    'Evaluation': '2',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'G L Balaji': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Gopal Singh Tandel': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Govind Prasad Pandya': {
    'Teaching': '3',
    'Evaluation': '3',
    'Behaviour': '3',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Hariharan R': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Harish Chandra': {
    'Teaching': '2',
    'Evaluation': '4',
    'Behaviour': '4.66',
    'Internals': '4',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Hemlatha Gangwar': {
    'Teaching': '2',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Javed Khan': {
    'Teaching': '2',
    'Evaluation': '3',
    'Behaviour': '3',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '4'
  },
  'Jitendra Parmar': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'JP Shritharanya': {
    'Teaching': '2.5',
    'Evaluation': '3',
    'Behaviour': '2.5',
    'Internals': '3',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'K Pallavi': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '4',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '3'
  },
  'Karishma Tiwari': {
    'Teaching': '2.75',
    'Evaluation': '2.75',
    'Behaviour': '3',
    'Internals': '3',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '4'
  },
  'L Sathish Kumar': {
    'Teaching': '2',
    'Evaluation': '2.33',
    'Behaviour': '2',
    'Internals': '2.66',
    'Average': 'Medium',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '3'
  },
  'Lokesh Malviya': {
    'Teaching': '1.66',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4.66',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'M Suresh': {
    'Teaching': '2.66',
    'Evaluation': '2.33',
    'Behaviour': '3.66',
    'Internals': '3',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'M R Thiyagu Priyadarshan': {
    'Teaching': '2',
    'Evaluation': '2',
    'Behaviour': '3',
    'Internals': '2',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Mamta Agarwal': {
    'Teaching': '3.5',
    'Evaluation': '3.5',
    'Behaviour': '4.5',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Manickam A': {
    'Teaching': '3',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Manimaran': {
    'Teaching': '3',
    'Evaluation': '3',
    'Behaviour': '2',
    'Internals': '3',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Manoj Acharya': {
    'Teaching': '4.5',
    'Evaluation': '4.5',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Manorma Chauhan': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Mayank Gupta': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Mayank Sharma': {
    'Teaching': '4.66',
    'Evaluation': '3.33',
    'Behaviour': '4.33',
    'Internals': '4.33',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '3'
  },
  'Mayuri Kailas': {
    'Teaching': '5',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Mohammad Sultan Alam': {
    'Teaching': '2',
    'Evaluation': '3.33',
    'Behaviour': '3.66',
    'Internals': '3.33',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Nafisa Hussain': {
    'Teaching': '2',
    'Evaluation': '2',
    'Behaviour': '1',
    'Internals': '3',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },
  'P. Narendra Babu': {
    'Teaching': '2.75',
    'Evaluation': '3.5',
    'Behaviour': '3.75',
    'Internals': '2.75',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '4'
  },
  'Navneet Verma': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Neha Choubey': {
    'Teaching': '5',
    'Evaluation': '3',
    'Behaviour': '4',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Nikhil Pateria': {
    'Teaching': '2.66',
    'Evaluation': '3.33',
    'Behaviour': '3.33',
    'Internals': '3.66',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Nilam Venkateshwarao': {
    'Teaching': '2',
    'Evaluation': '1',
    'Behaviour': '1',
    'Internals': '2',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },
  'Nilamadhab Mishra': {
    'Teaching': '3',
    'Evaluation': '2',
    'Behaviour': '3',
    'Internals': '2',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Palash Jain': {
    'Teaching': '4',
    'Evaluation': '2',
    'Behaviour': '3',
    'Internals': '4',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Pavan Mehta': {
    'Teaching': '1',
    'Evaluation': '1',
    'Behaviour': '4',
    'Internals': '1',
    'Average': 'Medium',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },
  'Pooja Lalwani': {
    'Teaching': '3.5',
    'Evaluation': '3.5',
    'Behaviour': '4',
    'Internals': '3',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Poonkundran': {
    'Teaching': '4',
    'Evaluation': '4.5',
    'Behaviour': '5',
    'Internals': '4.5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'PR Buvaneswari': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '3',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Prabhu M': {
    'Teaching': '4',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Pradeep Kashyap': {
    'Teaching': '4.2',
    'Evaluation': '3.6',
    'Behaviour': '3.4',
    'Internals': '4.6',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '5'
  },
  'Pradeep Kumar Mishra': {
    'Teaching': '2.66',
    'Evaluation': '2.33',
    'Behaviour': '2.66',
    'Internals': '2.33',
    'Average': 'Medium',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '3'
  },
  'Pranjali Malviya': {
    'Teaching': '2.66',
    'Evaluation': '1.33',
    'Behaviour': '1.66',
    'Internals': '2.66',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '3'
  },
  'Prashant Kumar Pandey': {
    'Teaching': '3',
    'Evaluation': '3',
    'Behaviour': '4',
    'Internals': '3.75',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '4'
  },
  'Praveen Kumar Lalwani': {
    'Teaching': '3.2',
    'Evaluation': '3.2',
    'Behaviour': '3.8',
    'Internals': '3.8',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '5'
  },
  'Priyank Nema': {
    'Teaching': '3',
    'Evaluation': '3.4',
    'Behaviour': '3',
    'Internals': '4.6',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Priyanka Roy': {
    'Teaching': '3.33',
    'Evaluation': '4.67',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '3'
  },
  'Rabia Musheer': {
    'Teaching': '3.2',
    'Evaluation': '3.2',
    'Behaviour': '3.2',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '5'
  },
  'Rahul Kumar Chaturvedi': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Rajdeep Ghosh': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Rajdeep Singh Payal': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Rajeev Saxena': {
    'Teaching': '5',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Rajit Nair': {
    'Teaching': '3.375',
    'Evaluation': '3.5',
    'Behaviour': '4.75',
    'Internals': '3.375',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '5'
  },
  'Ramesh Saha': {
    'Teaching': '2',
    'Evaluation': '2',
    'Behaviour': '4',
    'Internals': '5',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },
  'Ranjitha Kumar': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Ranju Yadav': {
    'Teaching': '3.5',
    'Evaluation': '2',
    'Behaviour': '4.5',
    'Internals': '3',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Reena Jain': {
    'Teaching': '1',
    'Evaluation': '1',
    'Behaviour': '1',
    'Internals': '1',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },
  'Ribu Mathew': {
    'Teaching': '3',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Rouf Khan': {
    'Teaching': '5',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '3',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'S Devaraju': {
    'Teaching': '4.25',
    'Evaluation': '4.25',
    'Behaviour': '4.75',
    'Internals': '4.5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'Green',
    'noOfReviews': '6'
  },
  'Sadanand Singh': {
    'Teaching': '2.5',
    'Evaluation': '3.5',
    'Behaviour': '3',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Sana Afreen': {
    'Teaching': '3.5',
    'Evaluation': '3.25',
    'Behaviour': '2',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Sandeep Mal': {
    'Teaching': '3',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Satyam Ravi': {
    'Teaching': '3',
    'Evaluation': '5',
    'Behaviour': '4.5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Saurav Prasad': {
    'Teaching': '2',
    'Evaluation': '2.33',
    'Behaviour': '2.33',
    'Internals': '2.66',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '3'
  },
  'Saurabh Bhargava': {
    'Teaching': '4/5',
    'Evaluation': '3/5',
    'Behaviour': '3/5',
    'Internals': '4/5',
    'Average': 'Low',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Saurabh Mishra': {
    'Teaching': '4',
    'Evaluation': '5',
    'Behaviour': '2',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Sayed Mohammed Zeeshan': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Shahid Abdullah': {
    'Teaching': '5',
    'Evaluation': '4.5',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Sharmila Joseph': {
    'Teaching': '3',
    'Evaluation': '1',
    'Behaviour': '2',
    'Internals': '3',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Shiju E': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '4.5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Shilpa Suman': {
    'Teaching': '2',
    'Evaluation': '2',
    'Behaviour': '3',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Shweta Mukherjee': {
    'Teaching': '3',
    'Evaluation': '3.5',
    'Behaviour': '3',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Shweta Saxena': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Shweta Singh': {
    'Teaching': '4.3',
    'Evaluation': '4.2',
    'Behaviour': '4',
    'Internals': '4.67',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '3'
  },
  'Siddharth Singh Chouhan': {
    'Teaching': '2.75',
    'Evaluation': '3',
    'Behaviour': '4.25',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '4'
  },
  'Soma Saha': {
    'Teaching': '1',
    'Evaluation': '3',
    'Behaviour': '1',
    'Internals': '2',
    'Average': 'Medium',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },
  'Sonali Shrivastav': {
    'Teaching': '3',
    'Evaluation': '3',
    'Behaviour': '3.25',
    'Internals': '3.25',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '4'
  },
  'Sonam Goswami': {
    'Teaching': '4',
    'Evaluation': '3.5',
    'Behaviour': '44.5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Soumya Sanskar Ghosh': {
    'Teaching': '2',
    'Evaluation': '2.5',
    'Behaviour': '3',
    'Internals': '3.5',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Subhash Chandra Bose J': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Suchetna Sadhukhan': {
    'Teaching': '2.14',
    'Evaluation': '2',
    'Behaviour': '3.28',
    'Internals': '3.28',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '7'
  },
  'Suchismita Patra': {
    'Teaching': '3',
    'Evaluation': '3',
    'Behaviour': '3.5',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'R P Sugavaneshwar': {
    'Teaching': '4',
    'Evaluation': '4.33',
    'Behaviour': '4.33',
    'Internals': '4.33',
    'Average': 'Low',
    'Overall': 'Good',
    'Color': 'Green',
    'noOfReviews': '4'
  },
  'Sumit Mittal': {
    'Teaching': '4.2',
    'Evaluation': '4.6',
    'Behaviour': '4.8',
    'Internals': '4.2',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '5'
  },
  'Suresh Babu': {
    'Teaching': '3.33',
    'Evaluation': '2.33',
    'Behaviour': '4.66',
    'Internals': '4.66',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Swati Chauhan': {
    'Teaching': '3',
    'Evaluation': '1',
    'Behaviour': '2',
    'Internals': '1',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '2'
  },
  'S Periyanagi': {
    'Teaching': '5/5',
    'Evaluation': '4/5',
    'Behaviour': '3/5',
    'Internals': '3/5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Ujjwal Kumar Mishra': {
    'Teaching': '3.5',
    'Evaluation': '2.5',
    'Behaviour': '3',
    'Internals': '3',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '2'
  },
  'Vijay Kumar Patel': {
    'Teaching': '1',
    'Evaluation': '1',
    'Behaviour': '1',
    'Internals': '1',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '2'
  },
  'Vijay Kumar Trivedi': {
    'Teaching': '3.5',
    'Evaluation': '4.5',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Vinod Bhatt': {
    'Teaching': '4',
    'Evaluation': '3',
    'Behaviour': '4',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '6'
  },
  'Vinod Jatav': {
    'Teaching': '4',
    'Evaluation': '3',
    'Behaviour': '5',
    'Internals': '2',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Vinod Kumar': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '5',
    'Internals': '4',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Vipin Jain': {
    'Teaching': '3',
    'Evaluation': '4',
    'Behaviour': '4.5',
    'Internals': '4.5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Virendra Singh Kushwaha': {
    'Teaching': '2.33',
    'Evaluation': '3.33',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '3'
  },
  'Yogesh Shukla': {
    'Teaching': '3.25',
    'Evaluation': '2.5',
    'Behaviour': '2.5',
    'Internals': '2.25',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '4'
  },
  'Yogita Dwivedi': {
    'Teaching': '4',
    'Evaluation': '4',
    'Behaviour': '3.5',
    'Internals': '4.5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  },
  'Hemant Nashine': {
    'Teaching': '4/5',
    'Evaluation': '3/5',
    'Behaviour': '3/5',
    'Internals': '3/5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Bhavana Bhagerwal': {
    'Teaching': '4/5',
    'Evaluation': '4/5',
    'Behaviour': '4.5/5',
    'Internals': '3.75/5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'KK Nair': {
    'Teaching': '5/5',
    'Evaluation': '4/5',
    'Behaviour': '5/5',
    'Internals': '4/5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Suresh Dara': {
    'Teaching': '4/5',
    'Evaluation': '5/5',
    'Behaviour': '5/5',
    'Internals': '4/5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Bhumika Choksi': {
    'Teaching': '3/5',
    'Evaluation': '4/5',
    'Behaviour': '3/5',
    'Internals': '4/5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Siddharth K.V': {
    'Teaching': '3/5',
    'Evaluation': '2/5',
    'Behaviour': '2/5',
    'Internals': '2/5',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },

  // Extra datas deleted 

  'Sandeep Sahu': {
    'Teaching': '3/5',
    'Evaluation': '4/5',
    'Behaviour': '5/5',
    'Internals': '4/5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Akshay Jadav':{
    'Teaching': '4/5',
    'Evaluation': '3.5/5',
    'Behaviour': '3.5/5',
    'Internals': '4/5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'
  },
  'Uday Kumar':{
    'Teaching': '3/5',
    'Evaluation': '4/5',
    'Behaviour': '5/5',
    'Internals': '4/5',
    'Average': 'Low',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Sughvanewshar Ramu Pasupathi':{
    'Teaching': '3/5',
    'Evaluation': '5/5',
    'Behaviour': '4/5',
    'Internals': '4/5',
    'Average': 'Medium',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  
  'Dipankar Sutradhar':{
    'Teaching': '3/5',
    'Evaluation': '5/5',
    'Behaviour': '4.5/5',
    'Internals': '5/5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'S Saravanan':{
    'Teaching': '4/5',
    'Evaluation': '5/5',
    'Behaviour': '4/5',
    'Internals': '4/5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '2'
  
  },
  
  'Santosh Kumar Bhal':{
    'Teaching': '3',
    'Evaluation': '3',
    'Behaviour': '2.5',
    'Internals': '3.5',
    'Average': 'Medium',
    'Overall': 'Average',
    'Color': 'orange',
    'noOfReviews': '2'    

  },
  'AVR Mayuri': {
    'Teaching': '4/5',
    'Evaluation': '5/5',
    'Behaviour': '4/5',
    'Internals': '4/5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'Green',
    'noOfReviews': '2'
  },
  'Sonal Gupta': {
    'Teaching': '1',
    'Evaluation': '2',
    'Behaviour': '2',
    'Internals': '2',
    'Average': 'Medium',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },
  'Saurabh Kumar Maurya': {
    'Teaching': '2',
    'Evaluation': '1',
    'Behaviour': '2',
    'Internals': '2',
    'Average': 'Low',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '2'
  },
  'Juhi Kesarwani': {
    'Teaching': '5',
    'Evaluation': '5',
    'Behaviour': '5',
    'Internals': '5',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'K Sripriyan': {
    'Teaching': '3',
    'Evaluation': '3',
    'Behaviour': '3',
    'Internals': '2',
    'Average': 'Low',
    'Overall': 'Medium',
    'Color': 'orange',
    'noOfReviews': '1'
  },
  'Prashant G K': {
    'Teaching': '2',
    'Evaluation': '4',
    'Behaviour': '2',
    'Internals': '3',
    'Average': 'High',
    'Overall': 'Bad',
    'Color': '#c30101',
    'noOfReviews': '1'
  },
  'S Balaguru': {
    'Teaching': '5',
    'Evaluation': '4',
    'Behaviour': '4',
    'Internals': '4',
    'Average': 'High',
    'Overall': 'Good',
    'Color': 'green',
    'noOfReviews': '1'
  },
  'Vijay Kumar Patidar': {
    'Teaching': '0',
    'Evaluation': '0',
    'Behaviour': '0',
    'Internals': '0',
    'Average': 'WIP',
    'Overall': 'need more reviews',
    'Color': 'purple',
    'noOfReviews': '0'
  },
  'Ajay Kumar Bhurjee': {
    'Teaching': '0',
    'Evaluation': '0',
    'Behaviour': '0',
    'Internals': '0',
    'Average': 'WIP',
    'Overall': 'need more reviews',
    'Color': 'purple',
    'noOfReviews': '0'
  },

  '0': {
    'Teaching': '0',
    'Evaluation': '0',
    'Behaviour': '0',
    'Internals': '0',
    'Average': 'WIP',
    'Overall': 'test',
    'Color': 'cyan',
    'noOfReviews': '0'
  },







};

//capturing the selected value in the dropdown
document.getElementById("submit").addEventListener('click', function () {
  let dropdown = document.getElementById("dropdown");
  let selectedProf = dropdown.value;

  // checking whether the selected Proffessors detail is present in our Object or not
  if (selectedProf in PROFFESSORS) {
    let selectedOption = document.getElementById("selectedOption");
    let Teaching = PROFFESSORS[selectedProf]['Teaching'];
    let Evaluation = PROFFESSORS[selectedProf]['Evaluation'];
    let Behaviour = PROFFESSORS[selectedProf]['Behaviour'];
    let Internals = PROFFESSORS[selectedProf]['Internals'];
    let Average = PROFFESSORS[selectedProf]['Average'];
    let Overall = PROFFESSORS[selectedProf]['Overall'].toUpperCase();
    let Color = PROFFESSORS[selectedProf]['Color'];
    let noOfReviews = PROFFESSORS[selectedProf]['noOfReviews'];



    //   Fetching Review of the selected Proffessor
    selectedOption.innerHTML = `Teaching: ${Teaching} <br>
              Evaluation : ${Evaluation} <br>
              Behaviour : ${Behaviour} <br>
              Internals : ${Internals} <br>
              No Of Reviews : ${noOfReviews} <br>
              Average : ${Average} <br><br>
              Overall : ${Overall} <br>`

      ;
    selectedOption.setAttribute("style", `background-color:${Color};`);


  }
  else {
    let selectedOption = document.getElementById("selectedOption");
    selectedOption.innerHTML = `Please Select a Professor from the above Dropdown list`;
    selectedOption.setAttribute("style", 'color: #f0ff00;');
  }
})



