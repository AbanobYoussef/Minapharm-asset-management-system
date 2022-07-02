using Entities.Context;
using Repositories.IGenericRepository;
using Repositories.Respository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.UnitOfWork
{
    public class UnitOfWork<T> : IUnitOfWork<T> where T : class
    {
        private readonly AssetsContext _context;
        private IGenericRepository<T> _entity;
        public IGenericRepository<T> Entity
    {
        get
        {
            return _entity ?? (_entity = new GenericRepository<T>(_context));
        }
    }


    public UnitOfWork(AssetsContext context)
    {
        this._context = context;
    }

    public  async Task Save()
    {
      await _context.SaveChangesAsync();
    }
}
}
