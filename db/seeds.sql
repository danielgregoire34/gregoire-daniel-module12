USE tracker_db;

INSERT INTO employee 
(id, first_name, last_name, title, department, salary, manager)
VALUE 
(1,"John","Doe","Engineer","Engineering",100000,"Bob"), 
(2,"Mike","Chan","Sales Lead","Sales",80000,"Bob"), 
(3,"Ashley","Brown","SalesPerson","Sales",70000,"Bob"), 
(4,"Tom","Gant","Accountant","Finance",100000,"Bob")


INSERT INTO role 
(id, title, department, salary)
VALUE 
(1,"Engineer","Engineering",100000),
(2,"Sales Lead","Sales",80000),
(3,"SalesPerson","Sales",70000),
(4,"Accountant","Fiance",100000)

INSERT INTO department 
(id,title)
VALUE 
(1,"Engineering"),
(2,"Sales"),
(3,"Finance")