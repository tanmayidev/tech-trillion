const Clanguage = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Getting Started',
        topics: ['Setup', 'Hello World', 'Data Types', 'Loop Example']
    },
    {
        id: 'Section 2: Basic Variables',
        topics: ['Data Types, Continued', 'For Loops', 'Unsigned Integers', 'Floating Point Numbers']
    },
    {
        id: 'Section 3: Numbers and Math',
        topics: ['Floats, Continued', 'Hexadecimal Notation', 'Binary Notation', 'Constants', 'Register Storage Class', 'Static Storage Class', 'Basic Operators']
    },
    {
        id: 'Section 4:  Functions ',
        topics: [' Functions - Part 1', 'Functions - Part 2', 'Arrays', 'Strings - Part 1', 'Strings - Part 2']
    },
    {
        id: 'Section 5: User Input Handling',
        topics: ['User Input', 'String Comparisons - Part 1', 'String Comparisons - Part 2', 'Control Flow - Part 1', 'Control Flow - Part 2']
    },
    {
        id: 'Section 6: Memory Management',
        topics: [' Pointers and Addresses - Part 1', 'Pointers and Addresses - Part 2', 'Printing Patterns - Part 1', 'Printing Patters - Part 2']
    },
    {
        id: 'Section 7: Complex Variables',
        topics: ['Structures - Part 1', 'Structures - Part 2', 'Structures - Part 3', 'Dynamic Memory Allocation - Part 1', 'Dynamic Memory Allocation - Part 2', 'Type Definition']
    },
    {
        id: 'Section 8: File I/O and Compiling',
        topics: ['Reading Files', 'Errors and Recursion', 'Command-Line Arguments', 'Compiler Flags', 'Inspecting Header Libraries']
    }
]

const NodeJS = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Course Overview',
        topics: ['NEW: Updates for 2021', 'NEW: Bonus Lectures']
    },
    {
        id: 'Section 2: Background Information ',
        topics: ['The Story of Node.js', 'What is V8, exactly?', 'What is Node.js exactly?', 'Anatomy of a Node Application', 'Common Node Conventions', 'Node.js vs the Browser']
    },
    {
        id: 'Section 3: Building a RESTful API',
        topics: ['Section Overview', 'Basic Scaffolding', 'Starting a Server', 'Parsing Request Paths', 'Parsing HTTP Methods', 'Parsinfg Query Strings', 'Parsing Headers', 'Parsing Payloads', 'Routing Requests', 'Returning JSON', 'Adding Configuration', 'Adding HTTPS Support', 'Service 1: /ping', 'Storing Data', 'Service 2: /users', 'Service 3: /tokens', 'Service 4: /checks', 'Connecting to an API', 'Background Workers', 'Logging to Files', 'Logging to the Console', 'Section Review']
    },
    {
        id: 'Section 4: Building a Web App GUI',
        topics: ['Section Overview', 'Refactoring for a GUI', 'Using Templates', 'Serving Static Assets', 'Making AJAX Requests', 'Page 1: Index', 'Page 2: Create an Account ', 'Page 3: Create a Session', 'Page 4: Deleted Session', 'Page 5: Edit Account', 'Page 6: Deleted Account', 'Page 7: Create a Check', 'Page 8: Dashboard', 'Page 9: Edit a Check', 'Section Review']
    },
    {
        id: 'Section 5:  Building a CLI ',
        topics: ['Section Overview', 'Adding a CLI', 'Handing Events', 'Command 1: Exit', 'Command 2: Man / Help', 'Command 3: Stats', 'Command 4: List Users', 'Command 5: More User Info', 'Command 6: List Checks', 'Command 7: More Check Info', 'Command 8: List Logs', 'Command 9: More Log Info', 'Section Review']
    },
    {
        id: 'Section 6: Gaining Stability ',
        topics: ['Section Overview', 'Creating Errors', 'Using the Debugger', 'Linting with "Strict"', 'Adding a Test Runner', 'Adding Unit Tests', 'Adding API Tests', 'Section Review']
    },
    {
        id: 'Section 7: Gaining Performance',
        topics: ['Section Overview', 'Refactoring for Performance', 'Using Performance Hooks', 'Using a Cluster', 'Using Child Processes', 'Section Review']
    },
    {
        id: 'Section 8: Loose End ',
        topics: ['Section Overview', 'HTTP2', 'VM', 'UDP / Datagram', 'Net', 'TLS / SSL', 'REPL', 'Async Hooks', 'Section Review']
    }
]

const Python = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Variables',
        topics: [' Variables', 'Setup Your Workstation']
    },
    {
        id: 'Section 2: Functions',
        topics: [' Functions']
    },
    {
        id: 'Section 3:  If Statements',
        topics: ['If Statements']
    },
    {
        id: 'Section 4:  Lists',
        topics: ['Lists']
    },
    {
        id: 'Section 5: Loops',
        topics: [' Introduction to Loops', 'While Loops', 'Breaking and Continuing', 'Making Shapes With Loops', 'Nested Loops']
    },
    {
        id: 'Section 6: Dictionaries and Sets',
        topics: ['Dictionaries and Sets', 'Examples of Dictionaries and Sets']
    },
    {
        id: 'Section 7: Input and Output (I/O)',
        topics: [' Introduction to I/O', 'File I/O', 'Tic-Tac-Toe', 'Participant Data']
    },
    {
        id: 'Section 8: Classes',
        topics: ['Introduction to Classes', 'Class Inheritance', 'Pets']
    },
    {
        id: 'Section 9: Importing',
        topics: [' Introduction to Importing', 'Alternative Import Methods', 'The Time Library', 'The Math Library', 'Guessing Game']
    },
    {
        id: 'Section 9: Error Handling',
        topics: ['Error Handling']
    },
    {
        id: 'Section 9:  Final Project',
        topics: [' Blackjack']
    }
]

const CPP = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Data Types and Variables',
        topics: [' Variables and Constants', 'Booleans', 'Characters', 'Integers']
    },
    {
        id: 'Section 2:  Basic Input and Output (I/O)',
        topics: [' Error Reporting', 'Datatype Sizes', 'Casting', 'Output Formatting', 'Keyboard Input']
    },
    {
        id: 'Section 3: Conventions and Operators',
        topics: ['Code Comments', 'Naming Conventions', 'Operators Overview', 'Comparison and Logical Operators', 'Operator Precedence']
    },
    {
        id: 'Section 4:  Statements, Switches, and Loops',
        topics: [' If and Else', 'Switch Statements', 'Ternary Operators', 'The Do While Loop', 'The For Loop']
    },
    {
        id: 'Section 5: Arrays and Pointers',
        topics: [' Arrays', 'Array Iteration', 'Multidimensional Arrays', 'Pointers']
    },
    {
        id: 'Section 6: Binary and Bits',
        topics: [' Binary Numbers', 'Boolean Operations on Bits', 'Bitwise Operators']
    },
    {
        id: 'Section 7: Application Structure',
        topics: [' Function Structure', 'Includes and Headers', 'Entry Points']
    },
    {
        id: 'Section 8: The String Class',
        topics: [' The String Class']
    },
    {
        id: 'Section 9: Object Oriented Programming',
        topics: ['Introduction to OOP', 'Objects and Classes', 'Encapsulation', 'Accessories and Overrides']
    },
    {
        id: 'Section 9: Working with Data',
        topics: [' Vectors', 'Reading Files Into Memory', 'Processing and Sorting Data', 'File Output']
    }

]

const ReactCourse = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Introduction',
        topics: ['The React Environment']
    },
    {
        id:'Section 2: Project Creation',
        topics: ['Creating a Project Using NPM','React Folder Structure','Updating the App File - Part 1','Updating the App File - Part 2']
    },
    {
        id: 'Section 3: JSX',
    topics: ['JSX Templating Introduction','Attributes in JSX','Styles in JSX','Expressions in JSX','Events in JSX']
    },
    {
        id: 'Section 4: Integration',
        topics: ['Using React CDNs - Part 1', 'Using React CDNs - Part 2' ]
    },
    {
        id: 'Section 5: Components',
        topics: ['Components - Part 1', 'Components - Part 2', 'Components - Part 3']
    },
    {
        id: 'Section 6: Props',
        topics: ['Props in Functional Components', 'Props in Class Components', 'Children Props']
    },
    {
        id: 'Section 7: Nesting',
        topics: ['Components Nesting - Part 1','Components Nesting - Part 2','Components Nesting - Part 3']
    },
    {
        id: 'Section 8: Reusability',
        topics: ['Reusability - Part 1', 'Reusability - Part 2','Reusability - Part 3']
    },
    {
        id: 'Section 9: State',
        topics: ['State Management - Part 1', 'State Management - Part 2','State Management - Part 3']
    }
]
 
const FrontendFundamentals = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Introduction',
        topics: ['Doctype', 'Head', 'Body and Paragraph' ,'Intro to JS Bin']
    },
    {
        id:'Section 2: HTML Lists',
        topics: ['List and Comments','Nested Lists','Setup Your Workstation']
    },
    {
        id: 'Section 3: HTML Images',
    topics: ['Images','Images in Lists']
    },
    {
        id: 'Section 4: HTML Links',
        topics: ['Links', 'Images as Links', 'Email Links']
    },
    {
        id: 'Section 5: More HTML Tags',
        topics: ['Div, Header, Footer, and Main']
    },
    {
        id: 'Section 6: Introduction to CSS',
        topics: ['Selectors, Rules and Properties', 'The Box Model (Padding, Margin and Borders)', 'Background Color and Font Size']
    },
    {
        id: 'Section 7: Intermediate CSS',
        topics: ['Width and Text Alignment',' Inheritance (Cascading)',' Type Selectors', ' Direct Descendants', 'Classes', ' IDs']
    },
    {
        id: 'Section 8: Advanced CSS',
        topics: ['Specificity', 'Advanced Selectors']
    },
    {
        id: 'Section 9: CSS Responsiveness',
        topics: [' More Properties and Mobile Responsiveness','External Stylesheets']
    }
]

const SQLite = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Introduction',
        topics: ['Key Concepts', ' Setup and Environment']
    },
    {
        id:'Section 2: Tables',
        topics: ['Creating Tables',' Inserting Into Tables']
    },
    {
        id: 'Section 3: Basic Syntax',
    topics: ['SQLite Commands', 'Data Types','Dates','Constraints']
    },
    {
        id: 'Section 4: Altering Tables',
        topics: ['Update and Delete', 'Challenge #1']
    },
    {
        id: 'Section 5: Advanced Syntax',
        topics: ['Complex Queries', 'Joins', 'Sub-Queries']
    },
    {
        id: 'Section 6: Functions and Views',
        topics: ['Functions', 'Views', 'Challenge #2']
    },
    {
        id: 'Section 7: Grouping',
        topics: ['Group-By and Having Clauses', 'Transactions']
    },
    {
        id: 'Section 8:  Triggers',
        topics: ['Triggers Overview']
    },
    {
        id: 'Section 9: Advanced Constraints',
        topics: ['Conditions','Read and Write Views', 'Foreign Key Constraints']
    },
    {
        id: 'Section 10: Wrapping Up',
        topics: ['Miscellaneous', 'SQLiteOpenHelper Class', 'Querying from Android']
    }
]


const MobileAppDevelopmentWithJava = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Introduction',
        topics: ['Environment Setup']
    },
    {
        id:'Section 2: Your First App',
        topics: ['App Construction - Part 1','App Construction - Part 2','App Improvements and Challenge','Challenge Solution']
    },
    {
        id: 'Section 3: Java',
    topics: ['Variables and Arithmetic Operators','Logical Operators and Conditionals','Loops and Challenge','Challenge Solution','Arrays','Object Oriented Programming (OOP) - Part 1','Object Oriented Programming (OOP) - Part 2','OOP Challenge','Collections','Class Interfaces ',' Concurrency, Threading and Challenge','Challenge Solution - Part 1','Challenge Solution - Part 2']
    },
    {
        id: 'Section 4: User Interfaces',
        topics: ['UI Basics - Part 1','UI Basics - Part 2','Layouts and Listeners','List View and Spinners','XML Files','Configuration Changes','Challenge and Solution - Part 1','Solution - Part 2']
    },
    {
        id: 'Section 5: Sample App #1',
        topics: ['First Page and Intents','Logs and Views','Recycler View Adapter - Part 1','Recycler View Adapter - Part 2','Show All Books','Fix Book Layout','App Improvements', 'Refactoring the Logic', 'Long Press']
    },
    {
        id: 'Section 6: Shortcuts and Debugging',
        topics: ['Android Studio Shortcuts', 'Debugging Logs and Exceptions']
    },
    {
        id: 'Section 7: Activities and Fragments',
        topics: ['Activity Lifecycle','Navigate Between Activities','Handling Intents','Calendar and Challenge','SaveInstanceState','Fragments','Passing Data with Callbacks','Image Slider App','Gym App - Part 1','Gym App - Part 2','Gym App - Part 3','Gym App - Part 4']
    },
    {
        id: 'Section 8:  Background Tasks',
        topics: ['Threads and Async Tasks','Started Services','Bound Services','Job Scheduler','Work Manager']
    },
    {
        id: 'Section 9: Networking',
        topics: ['XML Pull Parser - Part 1','XML Pull Parser - Part 2','JSON and Gson','Volley and HTTP Methods', 'Retrofit']
    },
    {
        id: 'Section 10: Sample App #2',
        topics: ['Navigation Drawer','Bottom Navigation View','Shared Preferences','Custom Sorting','Item Activity','Rating Handler','Search Activity','Debug Search','Cart Activity','Debug Cart','Payment','Popularity Points','User Behavior Tracking', 'App Improvements']
    },
    {
        id: 'Section 11: Databases',
        topics: ['SQL Fundamentals - Part 1','SQL Fundamentals - Part 2','Database Challenge A','Implementing SQLite','SQLOpenHelper Class','SQLite Cursors','Database Challenge B - Part 1','Database Challenge B - Part 2','Database Challenge B - Part 3','Camera Access','Permissions Handling','Room Database - Setup','Room Database - Callbacks and Migration','Many to Many Relationships','Database Challenge C - Part 1', 'Database Challenge C - Part 2']
    },
    {
        id: 'Section 12: Content Providers',
        topics: ['Calendar - Get Data','Calendar - Insert, Update and Delete','Contacts - Get Data','Contacts - Search, Delete and Update','Contacts - Insert','Create Content Provider - Part 1','Create Content Provider - Part 2','Database Integration','Insert, Update, Delete and getType', 'Database Sharing']
    },
    {
        id: 'Section 13: Notifications',
        topics: ['Creating a Notification Channel','Actions for Notifications','Large Text, Large Image, and Inbox Styles','Media and Messaging Styles','Group Notifications', 'Custom Views for Notifications']
    }

]

const JavaFundamental = [
    {
        id: 'Welcome',
        topics: ['Welcome to the Course']
    },
    {
        id: 'Section 1: Introduction',
        topics: ['Hello World', 'Understanding Errors']
    },
    {
        id:'Section 2: Data Types',
        topics: ['Integers', 'Floating Point Numbers','Math Functions', 'Characters','Strings']
    },
    {
        id: 'Section 3: Control Flow',
        topics: ['If Statements','Complex Conditionals', 'Switch Statements','While an Do-While Loops','For Loops']
    },
    {
        id: 'Section 4: Data Structures',
        topics: ['Arrays','Multidimensional Arrays','Array Lists', 'Maps']
    },
    {
        id: 'Section 5: Functions',
        topics: ['Basic Functions', 'Advanced Functions']
    },
    {
        id: 'Section 6: Basic OOP',
        topics: ['Classes and Objects', 'Constructors']
    },
    {
        id: 'Section 7: Advanced OOP',
        topics: ['Inheritance', 'Abstract Classes']
    },
    {
        id: 'Section 8:  Class Libraries',
        topics: ['Date and Time','Advanced Strings','Exceptions','Object Class','Primitive Classes']
    },
    {
        id: 'Section 9: Input and Output',
        topics: ['Writing Data','Reading Data', 'Serializing Classes']
    },
    {
        id: 'Section 10: GUI Development',
        topics: ['Swing GUIs', 'Visual GUI Editing', 'Event Handling']
    },
    {
        id: 'Section 11: Bonus Lectures: XML',
        topics: ['Reading XML', 'Parsing XML', 'Writing XML']
    }
]


export { ReactCourse, CPP, Python, NodeJS, Clanguage, JavaFundamental, MobileAppDevelopmentWithJava, SQLite, FrontendFundamentals }


