<%@page contentType="application/json; charset=UTF-8"%>

<%
	Thread.sleep(1000);
	String weightParam = request.getParameter("weight");

	try {
		int weight = Integer.parseInt(weightParam);

		if (weight > 0) {
			out.print("{ \"price\" : " + weight * 3 + " }");
		} else {
			out.print("{ \"error\" : 'Weight must be positive integer' }");
		}
	} catch (NumberFormatException e) {
		out.print("{ \"error\" : 'Weight must be positive integer' }");
	}
%>
