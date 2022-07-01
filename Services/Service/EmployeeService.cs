using AutoMapper;
using DTOs;
using Entities.Entities;
using Entities.Hrlpers;
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
        public ResultModel<EmployeeDTO> Delete(object id)
        {
            var reopResult = _employee.Entity.Delete(id);
            var DTO = _mapper.Map<EmployeeDTO>(reopResult.Result);


            ResultModel<EmployeeDTO> result = new ResultModel<EmployeeDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };
            return result;
        }

        public ResultModel<EmployeeDTO> GetALL()
        {

            var reopResult = _employee.Entity.GetALL(); ;
            var DTO = _mapper.Map<IEnumerable<EmployeeDTO>>(reopResult.ResultList);
            
            ResultModel<EmployeeDTO> result = new ResultModel<EmployeeDTO>()
            {
                Message = reopResult.Message,
                Result = null,
                ResultList = DTO
            };
            return result;
        }

        public ResultModel<EmployeeDTO> GetById(object id)
        {

            var reopResult = _employee.Entity.GetById(id);
            var DTO = _mapper.Map<EmployeeDTO>(reopResult.Result);

            ResultModel<EmployeeDTO> result = new ResultModel<EmployeeDTO>()
            {
                Message = reopResult.Message,
                Result =  DTO,
                ResultList = null
            };
            return result;
        }

        public ResultModel<EmployeeDTO> Insert(EmployeeDTO entity)
        {

            entity.Id = Guid.NewGuid();
            var newemp=  _mapper.Map<Employee>(entity);
            var reopResult = _employee.Entity.Insert(newemp);
            var DTO = _mapper.Map<EmployeeDTO>(reopResult.Result);

            ResultModel<EmployeeDTO> result = new ResultModel<EmployeeDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };
            return result;
        }

        public ResultModel<EmployeeDTO> Update(EmployeeDTO entity)
        {
            var newemp = _mapper.Map<Employee>(entity);

            var reopResult = _employee.Entity.Update(newemp);
            var DTO = _mapper.Map<EmployeeDTO>(reopResult.Result);

            ResultModel<EmployeeDTO> result = new ResultModel<EmployeeDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };
            return result;
        
        }
    }
}
