using AutoMapper;
using DTOs;
using Entities.Entities;
using Repositories.IGenericRepository;
using Services.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public class EmployeeService : IGenericService<EmployeeDTO>
    {
        private readonly IUnitOfWork<Employee> _employee;

        private IMapper _mapper;
        public EmployeeService(IUnitOfWork<Employee> employee,  IMapper mapper)
        {
            _employee=employee;
            _mapper=mapper;
        }
        public EmployeeDTO Delete(object id)
        {
          return  _mapper.Map<EmployeeDTO>(_employee.Entity.Delete(id));
        }

        public IEnumerable<EmployeeDTO> GetALL()
        {
           var list= _employee.Entity.GetALL();
           return _mapper.Map<IEnumerable<EmployeeDTO>>(list);
        }

        public EmployeeDTO GetById(object id)
        {
            return _mapper.Map<EmployeeDTO>(_employee.Entity.GetById(id));
        }

        public EmployeeDTO Insert(EmployeeDTO entity)
        {
          var newemp=  _mapper.Map<Employee>(entity);
            var newempDTO= _employee.Entity.Insert(newemp);
            return _mapper.Map<EmployeeDTO>(newempDTO);
        }

        public EmployeeDTO Update(EmployeeDTO entity)
        {
            var newemp = _mapper.Map<Employee>(entity);
            var newempDTO = _employee.Entity.Update(newemp);
            return _mapper.Map<EmployeeDTO>(newempDTO);
        }
    }
}
