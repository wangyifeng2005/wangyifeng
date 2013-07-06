<%@page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<%	
	
		response.getWriter().write("{'total':100,items:[{id:1,managerId:'001',managerName:'managerName1',empTime:'2010-02-11',managerGrade:'高级',basicSalary:'5000.00',subsidy:'500.32',performanceList:'A+,B+,C'},{id:2,managerId:'002',managerName:'managerName2',empTime:'2010-02-11',managerGrade:'高级见习',basicSalary:'4000',subsidy:'500',performanceList:'A,B,C'},{id:3,managerId:'003',managerName:'managerName3',empTime:'2010-02-11',managerGrade:'见习',basicSalary:'2000.65',subsidy:'500',performanceList:'A,B,C'},{id:4,managerId:'004',managerName:'managerName4',empTime:'2010-02-11',managerGrade:'客户经理',basicSalary:'3000.36',subsidy:'500',performanceList:'A,B,C'},{id:5,managerId:'005',managerName:'managerName5',empTime:'2010-02-11',managerGrade:'高级',basicSalary:'5000',subsidy:'500',performanceList:'A+,B+,C'}]}");
	
%>