package Utility;

import java.io.FileInputStream;
import java.util.Properties;

public class CommonUtilities {
	public void loadPropertyFiles(String sPath) throws Exception {
		Properties prop = new Properties();
		FileInputStream fi = new FileInputStream(sPath);
		prop.load(fi);
		System.getProperties().putAll(prop);

	}
}
