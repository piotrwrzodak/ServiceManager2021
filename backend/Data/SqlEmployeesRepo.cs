using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlEmployeeRepo : IEmployeeRepo
    {
        private readonly SM2021Context _context;

        public SqlEmployeeRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateEmployee(Employee employee)
        {
            if(employee==null){
                throw new ArgumentNullException(nameof(employee));
            }
            if(employee.Nip!=null&&_context.Employees.Where(p=>p.Nip==employee.Nip).FirstOrDefault()==null){
                int incrementedID=_context.Tickets.OrderByDescending(p=>p.IdCompany).Select(p=>p.IdCompany).First() + 1;
                employee.IdCompany=incrementedID;
            }
            else{
                employee.IdCompany=_context.Employees.Where(p=>p.Nip==employee.Nip).FirstOrDefault().IdCompany;
            }
            employee.Password=Services.Security.Hashing1(employee.Password);
            _context.Employees.Add(employee);
        }

        public void DeleteEmployee(Employee employee)
        {
           if(employee==null){
                throw new ArgumentNullException(nameof(employee));
            }
            _context.Employees.Remove(employee);
        }

        public IEnumerable<Employee> GetAllEmployee()
        {
            return _context.Employees.OrderByDescending(p=>p.IdEmployee).ToList();
        }

        public Employee GetEmployeeById(int id)
        {
            return _context.Employees.FirstOrDefault(p=>p.IdEmployee==id);
        }

        public Employee GetEmployeeByLoginPasswordId(string login, string password, int id)
        {
            return _context.Employees.FirstOrDefault(p=>p.IdCompany==id && p.Login==login && p.Password == password);
        }
        
        public Employee GetEmployeeByLoginPassword(string login, string password)
        {
            IEnumerable<Employee> byLogin = _context.Employees.Where(p=>p.Login==login).ToList();
            foreach(var i in byLogin){
                string salt = i.Password.Split(Services.Security.separator)[1];
                string hashPasswd = Services.Security.HashingWithSalt1(password,salt);
                if(i.Password==hashPasswd){
                    return _context.Employees.FirstOrDefault(p=>p.Login==login && p.Password == hashPasswd);
                }
            }
            return null;
        }

        public Employee GetEmployeeByApiKey(string apiKey){
            return _context.Employees.FirstOrDefault(p=>p.ApiKey==apiKey);
        }
        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateEmployee(Employee uzytkownicyUpdate)
        {
            //nothing
        }


    }
}