package com.onbox.userweb.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.swing.JOptionPane;

public class ConexaoDAO {
    public Connection conectaBD() {
Connection c = null;

try {
String url = "jdbc:mysql:// localhost: 3306/Onbox?user=root&password= ";
c = DriverManager.getConnection( url);


}catch (SQLException erro) {
JOptionPane.showMessageDialog(null, "ConexaoDao" + erro.getMessage() );

}
return c;

    }
}
