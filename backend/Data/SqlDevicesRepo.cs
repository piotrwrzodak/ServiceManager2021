using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlDevicesRepo : IDevicesRepo
    {
        private readonly SM2021Context _context;
        public SqlDevicesRepo(SM2021Context context)
        {
            _context = context;
            _context.Tickets.ToList();
        }

        public void CreateDevice(Device urzadzenie)
        {
            if(urzadzenie==null){
                throw new ArgumentNullException(nameof(urzadzenie));
            }
            _context.Devices.Add(urzadzenie);
        }

        public void DeleteDevice(Device urzadzenia)
        {
            if(urzadzenia==null){
                throw new ArgumentNullException(nameof(urzadzenia));
            }
            _context.Devices.Remove(urzadzenia);
        }

        public IEnumerable<Device> GetAllDevices()
        {
            return _context.Devices.OrderByDescending(p=>p.IdDevice).ToList();
        }

        public List<string> GetAllTypes()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Select(p=>p.Type).Distinct().ToList();
            return commandItem;
        }
        public List<string> GetSpecificBrand(string type)
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Where(p=>p.Type==type).Select(p=>p.Brand).Distinct().ToList();
            return commandItem;
        }

        public List<string> GetSpecificModel(string type, string brand)
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Where(p=>p.Type==type&&p.Brand==brand).Select(p=>p.Model).Distinct().ToList();        
            return commandItem;
        }

        public Device GetDeviceById(int id)
        {
            return _context.Devices.FirstOrDefault(p=>p.IdDevice==id);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateDevice(Device urzadzenie)
        {
            //nothing
        }

        public List<string> GetAllBrands()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Select(p=>p.Brand).Distinct().ToList();
            return commandItem;
        }

        public List<string> GetAllModels()
        {
            List<string> commandItem=new List<string>();
            commandItem=_context.Devices.Select(p=>p.Model).Distinct().ToList();
            return commandItem;
        }

        public List<Urzadzenia2> GetBrandsTest()
        {
            List<Urzadzenia2> data=new List<Urzadzenia2>();
            data = _context.Devices.Select(p=>new Urzadzenia2{Brand=p.Brand,Type=p.Type}).OrderBy(p=>p.Brand).Distinct().ToList();
            return data;

        }

        public List<Device> GetModelsTest()
        {
            return _context.Devices.OrderBy(p=>p.Model).Distinct().ToList();
        }

        public Device GetDeviceByModel(string type, string brand, string model)
        {
            return _context.Devices.FirstOrDefault(p=>p.Brand==brand&&p.Type==type&&p.Model==model);
        }
    }
}